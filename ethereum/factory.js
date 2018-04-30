import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa86cF7f9654E452a597753306942cf40e6deA225'
);

export default instance;
