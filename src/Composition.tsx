import {Composition} from 'remotion';
import {LeterVideo} from './LeterVideo';

export const MyComposition = () => {
  return (
    <Composition
      id="LeterApresentacao"
      component={LeterVideo}
      durationInFrames={2250}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{}}
    />
  );
};

