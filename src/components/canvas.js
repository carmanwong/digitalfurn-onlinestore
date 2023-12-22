import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Canvas = ({ draw }) => {
  const canvas = React.createRef();

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;

    draw(ctx);
  }, [draw, canvas]);

  return <canvas ref={canvas} />;
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
};

export default Canvas;
