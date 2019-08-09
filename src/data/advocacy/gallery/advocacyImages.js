import _ from 'lodash';
import importAll from '../../../utils/imageImport';

const images = importAll(
  require.context('../../../assets/images/advocacy/gallery', false, /\.(jpe?g|JPG)$/)
);

const advocacyImages = _.values(images);

export default advocacyImages;
