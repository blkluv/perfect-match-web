import { Schema } from "mongoose";
import * as survey from "../../types/surveyEnums";

export const surveySchema = new Schema(
  {
    social_media: {
      fb: { type: String },
      insta: { type: String },
      twitter: { type: String },
      snapchat: { type: String },
      linkedin: { type: String },
      phone: { type: String },
    },
    faction: { type: String, enum: survey.faction },
    libraryRanking: { type: Number, min: 1, max: 10 },
    clothDate: { type: String, enum: survey.clothDate },
    alternative: { type: String, enum: survey.alternative },
    task: { type: String, enum: survey.task },
    hookupsong: { type: String },
    hookupsongartist: { type: String },
    slopeDay: { type: String },
    study: { type: String, enum: survey.study },
    workTo: { type: String, enum: survey.workto },
    interests: [{ type: String, enum: survey.interests }],
    music: [{ type: String, enum: survey.music }],
    tv: { type: String, enum: survey.tv },
    date: [{ type: String, enum: survey.date }],
    sleepHabits: { sleeptime: { type: String }, waketime: { type: String } },
    plans: { type: String, enum: survey.plans },
    meal: { type: String, enum: survey.meal },
    perfectDay: { type: String, enum: survey.perfectDay },
    startover: { type: String, enum: ["yes", "no"] },
    timeormoney: { type: String, enum: survey.timeormoney },
    quality: { type: String, enum: survey.quality },
    humor: [{ type: [String], enum: survey.humor }],
    sociability: [{ type: [String], enum: survey.sociability }],
    p1: { type: String, enum: survey.range },
    p2: { type: String, enum: survey.range },
    p3: { type: String, enum: survey.range },
    p4: { type: String, enum: survey.range },
    p5: { type: String, enum: survey.range },
    p6: { type: String, enum: survey.range },
    p7: { type: String, enum: survey.range },
    p8: { type: String, enum: survey.range },
    p9: { type: String, enum: survey.range },
    p10: { type: String, enum: survey.range },
    p11: { type: String, enum: survey.range },
    p12: { type: String, enum: survey.range },
    p13: { type: String, enum: survey.range },
    p14: { type: String, enum: survey.range },
    p15: { type: String, enum: survey.range },
    p16: { type: String, enum: survey.range },
    p17: { type: String, enum: survey.range },
    p18: { type: String, enum: survey.range },
    p19: { type: String, enum: survey.range },
    generalPersonality: { type: String, enum: ["similar", "different"] },
    panel1: {
      introvert: { type: Number, min: 1, max: 10 },
      introvert_same: { type: String, enum: survey.panel },
    },
    panel2: {
      easygoing: { type: Number, min: 1, max: 10 },
      easygoing_same: { type: String, enum: survey.panel },
    },
    numdated: { type: Number },
    longestrelationship: { type: Number },
    ricePurity: { type: String, enum: survey.ricePurity },
    pairedwith: { type: String, enum: ["similar", "different", "either"] },
    apps: [{ type: String, enum: survey.apps }],
    politics: { type: Number, min: 1, max: 10 },
    politically_active: { type: Number, min: 1, max: 5 },
    habits: {
      drinking: { type: String, enum: survey.habits },
      smoking: { type: String, enum: survey.habits },
      weed: { type: String, enum: survey.habits },
      other: { type: String, enum: survey.habits },
    },
    partner_habits: {
      drinking: { type: String, enum: survey.habits },
      smoking: { type: String, enum: survey.habits },
      weed: { type: String, enum: survey.habits },
      other: { type: String, enum: survey.habits },
    },
    deal_breakers: [{ type: String, enum: survey.deal_breakers }],
  },
  { _id: false }
);
