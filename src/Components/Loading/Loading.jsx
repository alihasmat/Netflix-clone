import { Spinner, LockBody, LoadingPicture, ReleaseBody } from "./style";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <LoadingPicture
        src={`images/users/${src}.png`}
        alt="spinner"
        data-testid="loading-picture"
      />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody({ ...restProps }) {
  return <ReleaseBody {...restProps} />;
};
