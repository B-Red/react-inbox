import React from 'react'

let Message = (props) => {
    return(
        <div className={props.message.read ? "row message read" : "row message unread"} onClick={() => props.messageRead(props.message.id)}>
            <div class="col-xs-1">
                <div class="row">
                    <div class="col-xs-2">
                        <input type="checkbox" checked={(typeof props.message.selected !== "undefined") && props.message.selected === true ? "checked" : ""} onClick={() => props.messageSelected(props.message.id)} />
                    </div>
                    <div class="col-xs-2">
                        <i class="star fa fa-star-o"></i>
                    </div>
                </div>
            </div>
            <div class="col-xs-11">
                <a href="#">
                {props.message.subject}
                </a>
            </div>
        </div>
    )
}

export default Message