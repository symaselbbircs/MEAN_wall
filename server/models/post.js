var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref:'User'},
  name: {type:String, required:true},
  message: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});


var Post = mongoose.model('Post', PostSchema);
