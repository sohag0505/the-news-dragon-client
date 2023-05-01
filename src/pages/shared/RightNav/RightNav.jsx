import React from "react";
import Button from "react-bootstrap/Button";

const RightNav = () => {
  return (
    <div>
      <div>
        <h4 className="mt-4">Login With</h4>
        <Button className="mb-2" variant="outline-primary">
          Login with Google
        </Button>
        <Button variant="outline-secondary">Login with Github</Button>
      </div>
    </div>
  );
};

export default RightNav;
