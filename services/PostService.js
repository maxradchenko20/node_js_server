import Post from "../Post.js";
import fileServices from "./FileServices.js";

class PostService {
    async create(post, picture) {
        const fileName = fileServices.saveFile(picture);
        return Post.create({...post, picture: fileName});
    }

    async getAll() {
        return Post.find()
    }

    async getOne(id) {
        if (!id) {
            throw new Error('not possible to find ID');
        }
        return Post.findById(id)
    }

    async update(post) {
        if (!post._id) {
            throw new Error('not possible to find ID');
        }

        return Post.findByIdAndUpdate(post._id, post, {new: true})
    }

    async delete(id) {
        if (!id) {
            throw new Error('not possible to find ID');
        }
        return Post.findByIdAndDelete(id);

    }
}

export default new

PostService();