const express=require('express');
const router=express.Router();
const Image=require('../model/task');
const Comentary=require('../model/comentary');

router.get('/',async(req,res,next)=>{
	const images = await Image.find();
	res.render('index',{
		images
	});
});
router.get('/upload',async(req,res,next)=>{
	res.render('upload');
});
router.get('/comentary',async(req,res,next)=>{
	const comentarys = await Comentary.find();
	res.render('comentarios',{
		comentarys
	});
});
router.post('/upload',async(req,res,next)=>{
	const image = new Image();
	image.title = req.body.title;
	image.description = req.body.description;
	image.filename = req.file.filename;
	image.path = '/img/uploads/' + req.file.filename;
	image.originalname = req.file.originalname;
	image.mimetype = req.file.mimetype;
	image.size = req.file.size;
	await image.save();
	console.log(image);
	res.redirect('/');
});
router.get('/image/:id',async(req,res,next)=>{
	let {id} = req.params;
	const image = await Image.findById(id);
	res.render('profile',{
		image
	});
});
router.get('/deleteI/:id',async(req,res,next)=>{
	const {id} = req.params;
	await Image.remove({_id: id});
	res.redirect('/');
});
router.get('/deleteC/:id',async(req,res,next)=>{
	let {id} = req.params;
	await Comentary.remove({_id: id});
	res.redirect('/comentary');
});
router.get('/gustaC/:id',async(req,res,next)=>{
	let {id} = req.params;
	const comentarys = await Comentary.findById(id);
	comentarys.status = !comentarys.status;
	await comentarys.save();
	res.redirect('/comentary');
});
router.get('/edit/:id',async(req,res,next)=>{
	const comentarys = await Comentary.findById(req.params.id);
	res.render('edit',{
		comentarys
	})
});
router.post('/edit/:id',async(req,res,next)=>{
	const {id} = req.params;
	await Comentary.update({_id: id},req.body);
	res.redirect('/comentary');
});
router.post('/addC',async(req,res,next)=>{
	const comentary = new Comentary(req.body);
	await comentary.save();
	console.log(comentary)
	res.redirect('/');
});

module.exports=router;
