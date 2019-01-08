'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const SKILL_NAME = 'Manipal Buddy';
const WELCOME_MESSAGE = "Hi! I am your guide to Manipal. I can tell you about Manipal, the colleges there and anything else you may want " +
                            "to know. What can I help you with?";
const HELP_MESSAGE = 'You can ask anything you want to know or say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Thank you. Goodbye!';
const ABOUT_MESSAGE = 'Manipal is a locality of Udupi city, located 7 kilometres from centre of Udupi City in Karnataka, India. ' +
                        'It is located in Coastal Karnataka, about 63 km (39 mi) ' +
                        'north of Mangalore and 8 km (5 mi) east of the Arabian Sea. Home to the Manipal Academy ' +
                        'of Higher Education, the town attracts over twenty five thousand students every year. It is one of the most ' +
                        'cosmopolitan towns of India, attracting students and faculty from around 60 countries. What else do you want ' +
                        'to know?';
const ABOUT_MAHE_MESSAGE = 'Manipal Academy of Higher Education is synonymous with excellence in higher education. Over 28,000 students ' +
                            'from 57 different nations live, learn and play in the sprawling University town, nestled on a plateau ' +
                            'in Karnataka’s Udupi district. It also has nearly 2500 faculty and almost 10000 other support and ' +
                            'service staff, who cater to the various professional institutions in health sciences, engineering, ' +
                            'management, communication and humanities which dot the Wi-Fi-enabled campus. What else can I help you ' +
                            'with?';
const RANK_MESSAGE = 'MAHE continues to be the best private university in the country being ranked #1 by three prominent ranking ' +
                    'agencies, The Week, India Today and Education World. There was a considerable improvement in the ' +
                    'NIRF ranking ' +
                    'as well, moving seven places up to the 11th position from the 2017 ranking. What else do you want to know?';
const SOCIAL_LIFE_MESSAGE = 'Manipal is in itself a township with students of MAHE comprising more than two-thirds of the population. '+
                            'Over the years, Manipal has become self-sufficient with a whole host of eateries, branded outlets, ' +
                            'shopping complexes, multiplex, hotels including those with starred facilities, number of banks etc. '+
                            'All this and more made Manipal, in the words of a parent, “heaven on Earth”. What else can I help you ' +
                            'with?';      
const COURSES_MESSAGE = 'MAHE offers various Under Graduate(UG), ' +
                        'Post Graduate(PG) and Super Speciality (SS) programs through its ' +
                        'constituent units, that can be classified into different streams - Allied Health Sciences, '+
                        'Architecture and Design, Arts and Humanities, Sciences, Computer Applications, Dentistry, Engineering, ' +
                        'Hotel Management and Culinary Arts, Medicine, Media and Communication, Pharmacy and others. ' +
                        'What else do you want to know?';
const SCHOLARSHIP_MESSAGE = 'Scholarships offered are Free-ship and Merit-cum-means scholarship, ' + 
                                'AICTE Tuition Fee Waiver Scheme, ' +
                            'Scholarships for Academy of General Education Students (SAGES), Merit-cum-means scholarship for B-Tech ' +
                            'lateral entry students from Manipal group Polytechnic Institutions and many others as listed on the website. ' +
                            'What else can I help you with?';
const EXAM_MESSAGE = 'Admission to the courses offered by MAHE, is through the online Manipal Entrance Test (MET), ' +
                        'held at various centres in India. ' + 'Further details regarding test cities, test instructions and test pattern '+
                        'can be found on the website. What else do you want to know?';                            
const HELP_PROMPT = 'What do you want to know?';

const handlers = {
    'LaunchRequest': function () {
        this.response.speak(WELCOME_MESSAGE).listen(HELP_PROMPT);
        this.emit(':responseReady');
    },
    'AboutIntent': function () {
        this.response.cardRenderer(SKILL_NAME, ABOUT_MESSAGE);
        this.response.speak(ABOUT_MESSAGE).listen(HELP_PROMPT);
        this.emit(':responseReady');
    },
    
    'AboutMaheIntent': function () {
        this.response.cardRenderer(SKILL_NAME, ABOUT_MAHE_MESSAGE);
        this.response.speak(ABOUT_MAHE_MESSAGE).listen(HELP_PROMPT);
        this.emit(':responseReady');
    },
    'RankIntent': function () {
        this.response.cardRenderer(SKILL_NAME, RANK_MESSAGE);
        this.response.speak(RANK_MESSAGE).listen(HELP_PROMPT);
        this.emit(':responseReady');
    },
    'SocialLifeIntent': function () {
        this.response.cardRenderer(SKILL_NAME, SOCIAL_LIFE_MESSAGE);
        this.response.speak(SOCIAL_LIFE_MESSAGE).listen(HELP_PROMPT);
        this.emit(':responseReady');
    },
    'CoursesIntent': function() {
        this.response.cardRenderer(SKILL_NAME, COURSES_MESSAGE);
        this.response.speak(COURSES_MESSAGE).listen(HELP_PROMPT);
        this.emit(':responseReady');
    },
    'ScholarshipIntent': function() {
        this.response.cardRenderer(SKILL_NAME, SCHOLARSHIP_MESSAGE);
        this.response.speak(SCHOLARSHIP_MESSAGE).listen(HELP_PROMPT);
        this.emit(':responseReady');
    },
    'ExamIntent': function() {
        this.response.cardRenderer(SKILL_NAME, EXAM_MESSAGE);
        this.response.speak(EXAM_MESSAGE).listen(HELP_PROMPT);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function() {
        this.emit('AMAZON.CancelIntent');
    },
    'AMAZON.FallbackIntent': function() {
        this.speak("Sorry, I couldn't get that. Would you mind rephrasing?").listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'Unhadled': function() {
        this.speak("Sorry, I couldn't get that. Would you mind rephrasing?").listen(HELP_REPROMPT);
        this.emit(':responseReady');
    }
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
