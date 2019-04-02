
let comments = [
    {id:1,msg:'第一条评论'},
    {id:2,msg:'第二条评论'},
    {id:3,msg:'第三条评论'}
];
let blogs = [
    {id:1,msg:'第一条博客'},
    {id:2,msg:'第二条博客'},
    {id:3,msg:'第三条博客'}
]
let index = 4;
let listeners = [

];
let DateSource = {
    getComments(){
        return comments;
    },
    getBlogsPost(){
        return blogs;
    },
    addComment(data){
        comments.push({
            id:index++,
            msg:data
        })
        DateSource.doListener();
    },
    addChangeListener(listener){
        listeners.push(listener);
    },
    removeChangeListener(){
        
    },
    doListener(){
        listeners.forEach((item)=>{
            item();
        })
    }
}
export default DateSource;