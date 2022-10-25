import { useState } from "react";
import * as React from "react";
import { MentionsInput, Mention } from "react-mentions";
import MentionInputStyle from "./MentionsInputStyle";
import MentionStyle from "./MentionStyle";

export interface User {
    display: string;
    id: string;
}

export interface ICanvasMentionProps {
  placeholder?: string;
  users: User[];
}

export const CanvasMention = React.memo((props: ICanvasMentionProps) => {
  const [textState, setTextState] = useState({
    comment: "",
  });
 

  return (
    <MentionsInput
      placeholder={props.placeholder}
      value={textState.comment}
      style={MentionInputStyle}
      onChange={(e) => setTextState({...textState,comment: e.target.value})}
    >
      <Mention style={MentionStyle} trigger="@" data={props.users} />
    </MentionsInput>
  );
});

CanvasMention.displayName = "CanvasMention";
