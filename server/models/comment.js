var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CommentSchema = new Schema({
  name: {type: String, required: true},
  _post: {type: Schema.Types.ObjectId, ref: "Post"},
  comment: {type: String, required: true}
}, {timestamps: true});

var Comment = mongoose.model('Comment', CommentSchema);
