import values from 'lodash/values';
import { importAll } from '../../../utils/imageImport';

const images = importAll(require.context('../../../assets/images/members/sponsors', false, /\.(png|jpe?g)$/));
const sponsors = values(images);

export default sponsors;