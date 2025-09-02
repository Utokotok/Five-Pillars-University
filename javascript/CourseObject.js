export class CourseObject{
    static courseObjects = [];
    constructor(name, abbreviation, category){
        this.name = name
        this.abbreviation = abbreviation
        this.category = category
    }

    static initializeObjects(){
        CourseObject.courseObjects = [];
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Arts in Communication', 'BAComm', ['public speaking', 'journalism']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Arts in Creative Writing', 'BACW', ['journalism']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Arts in Philosophy', 'BSPhilo', ['human-behaviour', 'logical-thinking']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Arts in Sociology', 'BASoc', ['human-behaviour']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Arts in Political Science', 'BAPS', ['journalism', 'politics']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Arts in Language and Literature', 'BALL', ['public-speaking', 'journalism']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Science in Computer Science', 'BSCS', ['technology', 'programming', 'problem-solving', 'logical-thinking']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Science in Information Technology', 'BSIT', ['technology', 'programming', 'problem-solving', 'logical-thinking']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Science in Software Engineering', 'BSSE', ['technology', 'programming', 'problem-solving', 'logical-thinking']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Science in Civil Engineering', 'BSCE', ['building', 'logical-thinking', 'problem-solving']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Science in Electrical Engineering', 'BSEE', ['logical-thinking', 'problem-solving']))
        CourseObject.courseObjects.push(new CourseObject('Bachelor of Science in Data Science', 'BSDS', ['technology', 'problem-solving', 'logical thinking']))
    }

    static filterObjects(categories){
        CourseObject.initializeObjects()
        let filteredCourse = []
        categories.forEach((category) => {
            CourseObject.courseObjects.forEach((course) => {
                if(course.category.includes(category)) filteredCourse.push(course);
            })
        })
        return [...new Set(filteredCourse)]
    }
}

