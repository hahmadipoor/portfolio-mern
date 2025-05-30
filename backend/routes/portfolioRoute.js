const router = require("express").Router();
const { Intro, About, Project, Contact, Experience, Course } = require("../models/portfolioModel");


router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      courses: courses,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

////////////////Intro
router.post("/add-intro", async (req, res) => {
  try {
    const newIntro = new Intro(req.body);
    await newIntro.save();
    res.status(201).send({
      data: newIntro,
      success: true,
      message: "Intro added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add intro",
      error,
    });
  }
});

router.put("/update-intro", async (req,res)=>{
  try{
    const intro=await Intro.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:intro,
      success:true,
      message:"Intro updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-intro/:id", async (req, res) => {
  try {
    await Intro.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Intro deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete intro",
      error,
    });
  }
});

///////////////About
router.post("/add-about", async (req, res) => {
  try {
    const newAbout = new About(req.body);
    await newAbout.save();
    res.status(201).send({
      data: newAbout,
      success: true,
      message: "About added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add About",
      error,
    });
  }
});

router.put("/update-about", async (req,res)=>{
  try{
    const about=await About.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:about,
      success:true,
      message:"About updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-about/:id", async (req, res) => {
  try {
    await About.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "About deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete About",
      error,
    });
  }
});

///////////////////Experience
router.post("/add-experience", async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();
    res.status(201).send({
      data: newExperience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add Experience",
      error,
    });
  }
});

router.put("/update-experience", async (req,res)=>{
  try{
    const experience=await Experience.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:experience,
      success:true,
      message:"Experience updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-experience/:id", async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Experience to delete Experience",
      error,
    });
  }
});

module.exports = router;
