import React,{memo} from 'react'

 function Comment(props) {
        console.log('comment');
        return (
            <div>
                {props.renderNotify()}
                <br/>
                <textarea></textarea> <br />
                <button>Gửi</button>
            </div>
        )
}

//use memo to cover component 
export default memo(Comment)
