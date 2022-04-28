// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectDatabase } = require('../../lib/mongodb')
import User from '../../models/User';

class apiResponse {
  success: boolean;
  data: any;

  constructor(success, data) {
    this.success = success;
    this.data = data;
  }
}


export default async function user(req, res) {
  const { method } = req;
  const { db } = await connectDatabase();
  

  switch (method) {
    case 'GET':
      try {
        const user = await User.find({});
        res.status(200).json(new apiResponse(true, user));
      } catch (error) {
        res.status(400).json(new apiResponse(false, 'error in GET'));
      }
      break;
      
      case 'POST':
        try {
          const user = await User.create(req.body);
          res.status(200).json(new apiResponse(true, user));
        } catch (error) {
          res.status(400).json(new apiResponse(false, 'error in POST'));
        };
        break;

      case 'PUT':
        try {
          const { userId, userName } = req.body;
          const response = await User.findOneAndUpdate({ _id: userId }, { name : userName });
          res.status(200).json(new apiResponse(true, response));
        } catch (error) {
          res.status(400).json(new apiResponse(false, 'error in PUT'));
        }
        break;
        
      default:
        res.status(400).json({ success: false });
  }
}
