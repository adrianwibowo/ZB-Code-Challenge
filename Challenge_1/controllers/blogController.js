const { Blog } = require("../models/blog")

module.exports = {
    async Create(req, res) {
        try {
            const { name, description } = req.body;
            const row = await Blog.create({ name, description });

            res.status(201).json({
                success: true,
                message: "Blog Created",
                row,
            });
        } catch (error) {
            res.status(400).json({
                succes: false,
                message: error.message
            })
        }
    },

    async GetAll(req, res) {
        try {

            const data = await Blog.find()

            res.status(200).json({
                success: true,
                message: "All Blogs Data Retrieved",
                data,
            });
        } catch (error) {
            res.status(400).json({
                succes: false,
                message: error.message
            })
        }
    },

    async GetOne(req, res) {
        let { id } = req.params
        try {
            const row = await Blog.findById(id)
            if (!row) throw new Error(`Blog ID: ${id} not found`)

            res.status(200).json({
                success: true,
                message: `Retrieved Blogs ID: ${id} data`,
                row,
            });
        } catch (error) {
            res.status(400).json({
                succes: false,
                message: error.message
            })
        }
    },

    async Update(req, res) {
        let { id } = req.params
        try {
            const avail = await Blog.findById(id)
            if (!avail) throw new Error(`Blog ID: ${id} not found`)

            let obj = {};
            for (let input in req.body) {
                obj[input] = req.body[input];
            }
            const row = await Blog.findByIdAndUpdate(id, {$set: obj}, { new: true })

            res.status(200).json({
                success: true,
                message: `Blogs ID: ${id} Updated`,
                row,
            });
        } catch (error) {
            res.status(400).json({
                succes: false,
                message: error.message
            })
        }
    },

    async Delete(req, res) {
        let { id } = req.params
        try {
            const avail = await Blog.findById(id)
            if (!avail) throw new Error(`Blog ID: ${id} not found`)

            const row = await Blog.findByIdAndDelete(id)
            res.status(200).json({
                success: true,
                message: `Blogs ID: ${id} Deleted`,
                row,
            });
        } catch (error) {
            res.status(400).json({
                succes: false,
                message: error.message
            })
        }
    }
}

