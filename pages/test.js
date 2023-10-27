import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg() {
  return (
    <div>
      <h4>NextJs Popup - GeeksforGeeks</h4>
      <Popup
        trigger={<button> Click to open popup </button>}
        position="right center"
      >
        <div>GeeksforGeeks</div>
        <div>
          <form action="/action_page.php" class="form-container">
            <h1>Login</h1>

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit" class="btn">
              Login
            </button>
            <button type="button" class="btn cancel" onclick="closeForm()">
              Close
            </button>
          </form>
        </div>
      </Popup>
    </div>
  );
}
