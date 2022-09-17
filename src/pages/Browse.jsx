import BrowseContainer from "../containers/BrowseContainer";
import UseContent from "../hooks/UseContent";
import selectionMap from "../utils/selectionMap";

export default function Browse() {
  const { series } = UseContent("series");
  const { films } = UseContent("films");

  const slides = selectionMap({ series, films });

  return <BrowseContainer slides={slides} />;
}
