import React from "react";

type RenderIfProps = {
  children: JSX.Element | JSX.Element[];
  renderIf: boolean;
  renderElse?: JSX.Element | JSX.Element[];
};

function RenderIf(props: RenderIfProps) {
  const { children, renderIf, renderElse } = props;

  return <>{renderIf ? children : renderElse || null}</>;
}

export default RenderIf;
