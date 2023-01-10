import React from "react";

// * Use: About component
// * Desc: Tells about the application
// * Access: Public
// * Testing: Passed ✔ (09-04-2022)
const About = () => (
  <div className="features cnt-wrapper">
        <div className="about">
        <svg
          width="565"
          height="375"
          viewBox="0 0 565 375"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.50977 1.50903H475.345V270H1.50977V1.50903Z"
            stroke="#00B0FF"
            strokeWidth="2"
          />
          <path
            d="M22.5392 28.7999C27.0003 28.7999 30.6166 25.1898 30.6166 20.7365C30.6166 16.2831 27.0003 12.673 22.5392 12.673C18.0782 12.673 14.4618 16.2831 14.4618 20.7365C14.4618 25.1898 18.0782 28.7999 22.5392 28.7999Z"
            fill="#00B0FF"
          />
          <path
            d="M43.9323 28.7999C48.3934 28.7999 52.0098 25.1898 52.0098 20.7365C52.0098 16.2831 48.3934 12.673 43.9323 12.673C39.4713 12.673 35.8549 16.2831 35.8549 20.7365C35.8549 25.1898 39.4713 28.7999 43.9323 28.7999Z"
            fill="#FFE900"
          />
          <path
            d="M65.3254 28.7999C69.7865 28.7999 73.4029 25.1898 73.4029 20.7365C73.4029 16.2831 69.7865 12.673 65.3254 12.673C60.8644 12.673 57.248 16.2831 57.248 20.7365C57.248 25.1898 60.8644 28.7999 65.3254 28.7999Z"
            fill="black"
          />
          <path
            d="M426.427 42.2412H65.3374V43.5355H426.427V42.2412Z"
            fill="#3F3D56"
          />
          <path
            d="M211.2 84.9532H26.4409V247.388H211.2V84.9532Z"
            fill="#00B0FF"
          />
          <path
            d="M451.71 84.9532H266.951V247.388H451.71V84.9532Z"
            fill="#BABABA"
          />
          <path
            d="M134.154 120.128C127.101 108.232 113.149 107.677 113.149 107.677C113.149 107.677 99.5522 105.942 90.8302 124.059C82.7007 140.946 71.4808 157.251 89.0239 161.204L92.1927 151.359L94.1551 161.937C96.6529 162.117 99.1587 162.16 101.661 162.066C120.448 161.46 138.34 162.243 137.764 155.513C136.999 146.566 140.94 131.574 134.154 120.128Z"
            fill="#2F2E41"
          />
          <path
            d="M114.554 153.958C124.611 153.958 132.764 145.819 132.764 135.779C132.764 125.74 124.611 117.601 114.554 117.601C104.497 117.601 96.3437 125.74 96.3437 135.779C96.3437 145.819 104.497 153.958 114.554 153.958Z"
            fill="#A0616A"
          />
          <path
            d="M107.104 147.623C107.104 147.623 115.381 166.903 104.345 170.759L115.381 207.116L134.143 206.014L139.11 193.895L138.006 175.717L136.35 163.598C136.35 163.598 124.762 166.352 125.866 145.97L107.104 147.623Z"
            fill="#A0616A"
          />
          <path
            d="M102.69 170.208C102.69 170.208 84.4796 168.556 86.1351 181.776C87.7905 194.997 89.446 197.751 89.446 197.751L91.1014 217.582L81.1687 223.641H71.7879C71.7879 223.641 43.0934 230.252 57.4406 237.413C71.7879 244.574 76.7542 231.904 76.7542 231.904C76.7542 231.904 103.241 231.904 104.897 227.497C106.552 223.091 102.69 170.208 102.69 170.208Z"
            fill="#A0616A"
          />
          <path
            d="M138.006 164.7C138.006 164.7 155.112 158.64 156.216 171.861C157.319 185.081 157.319 186.183 157.319 186.183L160.63 204.912C160.63 204.912 167.252 221.438 167.252 226.396C167.252 231.353 172.218 246.777 172.218 246.777C172.218 246.777 178.84 268.261 171.667 267.71C164.493 267.159 163.389 244.574 163.389 244.574L148.49 214.828L144.076 196.649L138.006 164.7Z"
            fill="#A0616A"
          />
          <path
            d="M105.449 168.005H101.034L100.482 191.141C100.482 191.141 93.3087 201.056 102.138 209.87L104.345 224.192L144.628 222.54L147.387 207.666C147.387 207.666 152.905 195.548 145.179 184.53L138.006 161.945H134.143C134.143 161.945 143.09 194.875 124.21 195.548C108.76 196.098 105.449 168.005 105.449 168.005Z"
            fill="#FFE900"
          />
          <path
            d="M155.953 247.388H98.043C101.096 238.509 103.048 233.002 103.229 232.497C103.232 232.484 103.237 232.471 103.242 232.458L104.584 227.993L105.142 226.142L105.744 224.136L106.555 221.437L142.417 220.337L143.422 222.589L146.832 230.251C147.13 230.34 147.412 230.473 147.669 230.646C150.216 232.316 153.03 238.36 155.953 247.388Z"
            fill="#2F2E41"
          />
          <path
            d="M146.283 215.929L102.69 217.582C102.69 217.582 100.7 232.455 102.69 232.455C103.241 232.455 148.49 236.311 147.939 229.701C147.387 223.091 146.283 215.929 146.283 215.929Z"
            fill="#3F3D56"
          />
          <path
            d="M114.856 117.809C120.428 117.809 124.945 113.3 124.945 107.737C124.945 102.175 120.428 97.6662 114.856 97.6662C109.284 97.6662 104.767 102.175 104.767 107.737C104.767 113.3 109.284 117.809 114.856 117.809Z"
            fill="#2F2E41"
          />
          <path
            d="M103.706 105.087C103.706 102.6 104.628 100.2 106.295 98.3514C107.961 96.5024 110.254 95.3344 112.732 95.0725C112.379 95.0352 112.025 95.0163 111.67 95.0159C110.3 95.015 108.944 95.2928 107.685 95.8322C106.426 96.3717 105.29 97.1615 104.347 98.1536C103.403 99.1456 102.672 100.319 102.198 101.602C101.724 102.886 101.517 104.252 101.589 105.618C101.661 106.984 102.012 108.321 102.618 109.547C103.225 110.773 104.076 111.864 105.119 112.751C106.161 113.638 107.374 114.304 108.683 114.709C109.992 115.113 111.37 115.247 112.732 115.102C110.254 114.84 107.961 113.672 106.295 111.823C104.628 109.974 103.706 107.574 103.706 105.087V105.087Z"
            fill="#2F2E41"
          />
          <path
            d="M131.036 118.981L117.251 111.773L98.2147 114.721L94.2765 132.086L104.08 131.71L106.819 125.33V131.605L111.344 131.431L113.969 121.274L115.61 132.086L131.692 131.759L131.036 118.981Z"
            fill="#2F2E41"
          />
          <path
            d="M350.59 142.994C360.73 142.994 368.951 134.788 368.951 124.665C368.951 114.542 360.73 106.335 350.59 106.335C340.449 106.335 332.228 114.542 332.228 124.665C332.228 134.788 340.449 142.994 350.59 142.994Z"
            fill="#FFB9B9"
          />
          <path
            d="M343.417 138.698C343.417 138.698 345.712 149.581 345.712 150.727C345.712 151.872 356.614 157.027 356.614 157.027L366.369 155.309L369.812 144.999C369.812 144.999 364.074 136.407 364.074 132.97L343.417 138.698Z"
            fill="#FFB9B9"
          />
          <path
            d="M392.892 247.388L395.258 243.065L395.634 242.373L391.044 193.687L391.317 191.487L396.205 151.875L367.907 141.941H367.901C367.846 144.437 367.003 146.852 365.492 148.842C363.981 150.831 361.879 152.294 359.486 153.021C350.877 155.881 344.952 146.251 344.952 146.251L321.037 164.475L332.654 198.101L338.255 214.306C338.255 214.306 338.826 233.209 339.403 234.93C339.973 236.645 338.826 237.221 338.255 237.791C337.678 238.367 338.826 240.082 339.403 240.082C339.688 240.082 340.258 242.23 340.764 244.379C341.023 245.479 341.263 246.579 341.432 247.388H392.892Z"
            fill="#FFE900"
          />
          <path
            d="M437.806 244.379C437.806 244.379 453.298 254.116 451.577 260.417C449.855 266.717 432.068 249.534 432.068 248.961C432.068 248.388 437.806 244.379 437.806 244.379Z"
            fill="#FFB9B9"
          />
          <path
            d="M392.892 247.388H397.209L395.919 242.657C395.706 242.804 395.485 242.94 395.258 243.065C393.566 244.023 388.516 246.424 378.98 247.388C373.029 247.94 367.039 247.94 361.088 247.388C354.47 246.803 347.896 245.798 341.406 244.379H340.258L339.617 247.388H392.892Z"
            fill="#2F2E41"
          />
          <path
            d="M334.667 109.897C334.667 109.897 340.496 97.2884 351.67 100.198C362.843 103.108 369.159 107.473 369.645 111.837C370.13 116.202 369.402 122.749 369.402 122.749C369.402 122.749 368.187 113.777 360.414 115.717C352.642 117.657 340.496 116.202 340.496 116.202L338.553 133.66C338.553 133.66 336.367 130.508 333.938 132.448C331.509 134.388 326.894 113.777 334.667 109.897Z"
            fill="#2F2E41"
          />
          <path
            d="M333.938 247.388H318.146L317.024 245.239C310.14 233.209 310.14 216.597 310.14 216.597L314.152 182.802C313.582 170.772 321.037 164.475 321.037 164.475H329.646L335.96 185.669L332.654 198.101L328.499 213.736L327.351 215.451C327.351 215.451 328.499 217.173 327.922 217.742C327.351 218.318 326.774 220.609 326.774 220.609C326.774 220.609 328.499 232.064 330.223 233.209C331.941 234.354 329.646 234.354 329.646 234.93C329.646 235.5 331.371 237.791 331.371 237.791V240.658L333.938 247.388Z"
            fill="#FFE900"
          />
          <path
            d="M386.452 150.154L396.206 151.872C396.206 151.872 401.944 157.6 404.239 164.474L408.829 185.094L416.289 199.987C416.289 199.987 424.895 208.579 431.207 228.054L440.388 245.238L430.633 250.966C430.633 250.966 403.665 219.462 400.222 208.579L385.304 179.939L386.452 150.154Z"
            fill="#FFE900"
          />
          <path
            d="M514.054 367.666C513.923 367.977 513.776 368.282 513.613 368.577C512.757 370.158 511.548 371.519 510.08 372.554C508.342 373.778 506.302 374.501 504.181 374.644C502.06 374.787 499.941 374.345 498.055 373.365C496.168 372.385 494.587 370.905 493.483 369.087C492.379 367.27 491.796 365.183 491.796 363.056V361.182H493.385C499.561 365.177 506.705 367.418 514.054 367.666Z"
            fill="black"
          />
          <path
            d="M536.736 361.731V363.056C536.737 365.637 535.879 368.145 534.297 370.183C532.715 372.221 530.499 373.673 528 374.311C525.501 374.948 522.861 374.734 520.497 373.703C518.134 372.671 516.18 370.881 514.947 368.615C514.777 368.312 514.623 367.999 514.487 367.68C514.826 367.689 515.161 367.694 515.5 367.694C522.993 367.702 530.342 365.639 536.736 361.731V361.731Z"
            fill="black"
          />
          <circle cx="515.791" cy="321.477" r="41.0042" fill="#FBBC05" />
          <circle cx="515.791" cy="238.004" r="39.5398" fill="#FBBC05" />
          <path
            d="M548.112 301.519C547.297 300.938 546.323 300.625 545.323 300.621H527.043C525.769 300.621 524.548 301.127 523.648 302.029C522.747 302.93 522.241 304.152 522.241 305.426C522.241 306.7 522.747 307.922 523.648 308.823C524.548 309.725 525.769 310.231 527.043 310.231H545.323C545.649 310.232 545.974 310.199 546.294 310.133C546.612 310.064 546.923 309.966 547.224 309.84C548.005 309.503 548.683 308.964 549.188 308.279C549.693 307.593 550.007 306.786 550.097 305.939C550.187 305.092 550.051 304.237 549.702 303.46C549.353 302.683 548.804 302.013 548.111 301.519L548.112 301.519Z"
            fill="black"
          />
          <path
            d="M528.26 307.865C529.606 307.865 530.697 306.773 530.697 305.426C530.697 304.079 529.606 302.986 528.26 302.986C526.913 302.986 525.822 304.079 525.822 305.426C525.822 306.773 526.913 307.865 528.26 307.865Z"
            fill="#F1F1F1"
          />
          <path
            d="M536.182 307.865C537.528 307.865 538.619 306.773 538.619 305.426C538.619 304.079 537.528 302.986 536.182 302.986C534.835 302.986 533.744 304.079 533.744 305.426C533.744 306.773 534.835 307.865 536.182 307.865Z"
            fill="#F1F1F1"
          />
          <path
            d="M544.104 307.865C545.45 307.865 546.541 306.773 546.541 305.426C546.541 304.079 545.45 302.986 544.104 302.986C542.758 302.986 541.666 304.079 541.666 305.426C541.666 306.773 542.758 307.865 544.104 307.865Z"
            fill="#00B0FF"
          />
          <path
            d="M552.555 300.282C552.406 300.007 552.253 299.738 552.095 299.472C552.09 299.463 552.085 299.458 552.081 299.449C548.424 293.184 543.202 287.979 536.927 284.343C530.652 280.708 523.541 278.768 516.291 278.713C509.041 278.658 501.901 280.491 495.573 284.031C489.244 287.572 483.944 292.698 480.193 298.907C476.442 305.116 474.369 312.194 474.176 319.447C473.984 326.7 475.68 333.879 479.097 340.278C482.514 346.677 487.535 352.077 493.667 355.948C499.8 359.819 506.832 362.028 514.075 362.358C514.516 362.381 514.963 362.395 515.409 362.395C515.595 362.404 515.776 362.404 515.962 362.404C523.434 362.415 530.771 360.408 537.198 356.595C544.18 352.46 549.819 346.395 553.438 339.129C553.442 339.12 553.447 339.115 553.452 339.106C553.591 338.827 553.726 338.543 553.861 338.255C556.656 332.272 557.995 325.712 557.768 319.111C557.541 312.511 555.755 306.058 552.555 300.282ZM552.955 337.999C552.82 338.287 552.68 338.571 552.536 338.85C549.079 345.728 543.766 351.5 537.198 355.511C530.804 359.419 523.455 361.482 515.962 361.474C515.623 361.474 515.288 361.469 514.949 361.46C514.805 361.46 514.661 361.455 514.516 361.446C507.42 361.198 500.51 359.105 494.467 355.373C488.424 351.642 483.456 346.4 480.052 340.164C476.647 333.927 474.924 326.912 475.052 319.807C475.179 312.702 477.153 305.753 480.778 299.643C484.404 293.533 489.557 288.473 495.73 284.96C501.903 281.448 508.883 279.605 515.984 279.612C523.085 279.618 530.062 281.475 536.228 284.999C542.394 288.523 547.537 293.593 551.151 299.71C551.156 299.719 551.161 299.724 551.165 299.733C551.328 299.998 551.486 300.268 551.635 300.538C554.824 306.224 556.608 312.591 556.838 319.108C557.068 325.625 555.736 332.102 552.955 337.999Z"
            fill="black"
            stroke="black"
          />
          <path
            d="M552.371 221.551C552.023 221.5 551.67 221.467 551.316 221.444C555.331 230.701 555.609 241.154 552.093 250.612C552.446 250.57 552.794 250.514 553.143 250.449C556.547 249.789 559.606 247.942 561.777 245.236C563.947 242.53 565.087 239.141 564.995 235.673C564.902 232.204 563.583 228.881 561.271 226.295C558.959 223.709 555.806 222.028 552.371 221.551V221.551Z"
            fill="black"
          />
          <path
            d="M479.683 221.444C479.33 221.467 478.977 221.5 478.628 221.551C475.194 222.028 472.04 223.709 469.729 226.295C467.417 228.881 466.098 232.204 466.005 235.673C465.913 239.141 467.053 242.53 469.223 245.236C471.393 247.942 474.453 249.789 477.857 250.449C478.205 250.514 478.554 250.57 478.907 250.612C475.391 241.154 475.67 230.701 479.683 221.444V221.444Z"
            fill="black"
          />
          <path
            d="M552.371 221.551C548.542 212.398 541.45 204.996 532.473 200.784C523.496 196.571 513.274 195.848 503.794 198.756C494.314 201.663 486.252 207.993 481.175 216.516C476.097 225.039 474.367 235.147 476.32 244.875C478.274 254.603 483.77 263.257 491.743 269.156C499.716 275.056 509.595 277.779 519.462 276.796C529.329 275.814 538.478 271.196 545.133 263.84C551.788 256.484 555.473 246.916 555.472 236.993C555.47 231.691 554.416 226.442 552.371 221.551ZM552.093 250.612C548.693 259.758 541.995 267.299 533.318 271.751C524.641 276.203 514.613 277.244 505.208 274.668C495.802 272.092 487.701 266.087 482.498 257.834C477.296 249.581 475.368 239.678 477.095 230.074C478.823 220.47 484.08 211.861 491.832 205.941C499.583 200.021 509.269 197.219 518.981 198.087C528.694 198.955 537.73 203.429 544.311 210.63C550.892 217.83 554.542 227.235 554.542 236.993C554.541 241.642 553.711 246.254 552.093 250.612Z"
            fill="black"
            stroke="black"
          />
          <path
            d="M535.951 227.923H495.049C492.892 227.923 490.823 228.781 489.298 230.307C487.772 231.834 486.915 233.904 486.915 236.063C486.915 238.222 487.772 240.292 489.298 241.819C490.823 243.345 492.892 244.203 495.049 244.203H535.951C538.108 244.203 540.177 243.345 541.702 241.819C543.228 240.292 544.085 238.222 544.085 236.063C544.085 233.904 543.228 231.834 541.702 230.307C540.177 228.781 538.108 227.923 535.951 227.923V227.923Z"
            fill="black"
          />
          <path
            d="M496.386 236.067C496.386 238.898 501.931 241.013 499.1 241.013C496.269 241.013 493.974 238.718 493.974 235.888C493.974 233.057 496.269 230.762 499.1 230.762C501.931 230.762 496.386 233.237 496.386 236.067Z"
            fill="#00B0FF"
          />
          <path
            d="M539.222 235.808C539.222 238.638 536.927 240.933 534.096 240.933C531.266 240.933 537.382 238.638 537.382 235.808C537.382 232.977 531.266 230.682 534.096 230.682C536.927 230.682 539.222 232.977 539.222 235.808Z"
            fill="#00B0FF"
          />
          <path
            d="M523.878 236.067C523.878 237.73 523.217 239.325 522.041 240.501C520.865 241.677 519.271 242.338 517.608 242.338C515.945 242.338 514.35 241.677 513.174 240.501C511.998 239.325 511.338 237.73 511.338 236.067L517.608 236.067H523.878Z"
            fill="#00B0FF"
          />
            </svg>
            
      <div>
        <h4>About Attentive</h4>
        <p>
          Attentive is a free, AI-powered video calling app that helps you take
          accurate, real-time attendance for educational purposes. It is built
          using cutting-edge technologies, including face-api.js, which has a
          prediction accuracy of 99.38%. With Attentive, you can easily and
          accurately track attendance for your classes, lectures, and other
          educational events. Whether you are a teacher, student, or
          administrator, Attentive can help you streamline your
          attendance-taking process and ensure that you have an accurate record
          of who was not just present but{" "}
          <span className="heading">Attentive</span>.
        </p>
      </div>
      <div>
        <h4>How it Works</h4>
        <ul>
          <li>Start a meeting and invite participants.</li>
          <li>
            Once the participants join the meeting and enable the Attentive bot,
            the bot begins capturing snapshots of the participants at specified
            intervals.
          </li>
          <li>
            These snapshots are processed using face-api.js, a JavaScript API
            for face detection and recognition, to recognize the face of the
            participant registered with the Attentive account.
          </li>
          <li>
            If the participant's face is detected and recognized, they are
            marked as present for that particular time stamp.
          </li>
          <li>
            The results of all time stamps are then used to evaluate the
            participant's attendance for the entire duration of the meeting.
            This information is displayed in the participant's panel for
            reference.
          </li>
          <li>
            You can easily export these attendance results to a text file with a
            single click.
          </li>
          <li>
            We are working on a feature that will allow you to save these
            records for future access.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
export default About;