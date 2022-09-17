import { useContext, useState, useEffect } from "react";
import ProfileContainer from "./ProfileContainer";
import FooterContainer from "./FooterContainer";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading, Card, Player } from "../Components";
import Fuse from "fuse.js";

import * as ROUTES from "../constants/Routes";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSelectedRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(selectedRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (
      selectedRows.length > 0 &&
      searchTerm.length > 3 &&
      results.length > 0
    ) {
      setSelectedRows(results);
    } else {
      setSelectedRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/Images/misc/logo.svg"
              alt="logo"
            />
            <Header.TextLink onClick={() => setCategory("series")}>
              Series
            </Header.TextLink>
            <Header.TextLink onClick={() => setCategory("films")}>
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search>
              <Header.SearchIcon
                onClick={() => setSearchActive((prev) => !prev)}
              >
                <img src="images/icons/search.png" />
              </Header.SearchIcon>
              <Header.SearchInput
                value={searchTerm}
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                active={searchActive}
              />
            </Header.Search>

            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>

        <Header.Gradient />
      </Header>

      <Card.Group>
        {selectedRows.map((slideItem) => (
          <Card key={`${category} - ${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>

            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
