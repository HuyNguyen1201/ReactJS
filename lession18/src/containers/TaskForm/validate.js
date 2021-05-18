const validate = value=>{
    const error = {};
    const {title, description} = value;
    if(!title){
        error.title = 'Vui lòng nhập tiêu đề';
    }
    else if (title.trim() && title.length < 5){
        error.title = 'Tiêu đề phải từ 5 kí tự';
    }
    if(!description){
        error.description = 'Vui lòng nhập nội dung';
    }
    return error;
};
export default validate;