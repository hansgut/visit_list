const express = require('express');
const router = express.Router();
const Subject = require('../../models/subject');
const LessonType = require('../../models/lesson-type');
const Position = require('../../models/position');
let User = require('../../models/User');
const Visit = require('../../models/visit');

// Subjects

router.get("/subjects", (req, res)=>{
    Subject.find({})
        .then(subjects => {
            return res.json({
                subjects: subjects
            });
        });
});

router.get("/subjects/:id", (req, res)=>{
   Subject.findById({_id: req.params.id})
       .then(subject => {
          res.send(subject);
       });
});

router.post("/subjects", (req, res)=>{
    Subject.create(req.body)
        .then(subject => {
            res.send(subject);
        });
});

router.put("/subjects/:id", (req, res)=>{
    Subject.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(()=> {
           Subject.findOne({_id: req.params.id})
               .then(subject => {
                  res.send(subject);
               });
        });
});

router.delete("/subjects/:id", (req, res)=>{
    Subject.deleteOne({_id: req.params.id})
        .then(subject => {
           res.send(subject);
        });
});

// LessonTypes

router.get("/lesson_types", (req, res)=>{
    LessonType.find({})
        .then(lessonTypes => {
            res.send(lessonTypes);
        })
});

router.get("/lesson_types/:id", (req, res)=>{
    LessonType.findById({_id: req.params.id})
        .then(lessonType => {
            res.send(lessonType);
        });
});

router.post("/lesson_types", (req, res)=>{
    LessonType.create(req.body)
        .then(lessonType => {
            res.send(lessonType);
        });
});

router.put("/lesson_types/:id", (req, res)=>{
    LessonType.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(()=> {
            LessonType.findOne({_id: req.params.id})
                .then(lessonType => {
                    res.send(lessonType);
                });
        });
});

router.delete("/lesson_types/:id", (req, res)=>{
    LessonType.deleteOne({_id: req.params.id})
        .then(lessonType => {
            res.send(lessonType);
        });
});

// Positions TODO validates for foreign ids

router.get("/positions", (req, res)=>{
    Position.find({})
        .then(positions => {
            return res.json({
                positions: positions
            });
        });
});

router.get("/positions/:id", (req, res)=>{
    Position.findById({_id: req.params.id})
        .then(position => {
            res.send(position);
        });
});

router.post("/positions", (req, res)=>{
    Position.create(req.body)
        .then(position => {
            res.send(position);
        });
});

router.put("/positions/:id", (req, res)=>{
    Position.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(()=> {
            Position.findOne({_id: req.params.id})
                .then(position => {
                    res.send(position);
                });
        });
});

router.delete("/positions/:id", (req, res)=>{
    Position.deleteOne({_id: req.params.id})
        .then(position => {
            res.send(position);
        });
});

// Visits TODO validates for foreign ids

router.get("/visits", (req, res)=>{
    Visit.find({})
        .populate({
            path: "visiting_teacher",
            populate: { path: "position" }
        })
        .populate({
            path: "visited_teacher",
            populate: { path: "position" }
        })
        .populate("subject").populate("lesson_type")
        .then(visits => {
            res.send(visits);
        })
});

router.get("/visits/:id", (req, res)=>{
    Visit.findById({_id: req.params.id})
        .populate({
            path: "visiting_teacher",
            populate: { path: "position" }
        })
        .populate({
            path: "visited_teacher",
            populate: { path: "position" }
        })
        .populate("subject").populate("lesson_type")
        .then(visit => {
            res.send(visit);
        });
});

router.post("/visits", (req, res)=>{
    Visit.create(req.body)
        .then(visit => {
            res.send(visit);
        });
});

router.put("/visits/:id", (req, res)=>{
    Visit.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(()=> {
            Visit.findOne({_id: req.params.id})
                .populate({
                path: "visiting_teacher",
                populate: { path: "position" }
                })
                .populate({
                    path: "visited_teacher",
                    populate: { path: "position" }
                })
                .populate("subject").populate("lesson_type")
                .then(visit => {
                    res.send(visit);
                });
        });
});

router.delete("/visits/:id", (req, res)=>{
    Visit.deleteOne({_id: req.params.id})
        .then(visit => {
            res.send(visit);
        });
});

module.exports = router;