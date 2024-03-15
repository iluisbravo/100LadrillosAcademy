const SubFooter = () => {
  return (
    <div className="text-center p-5">
      <p>Code <i className="bi bi-code-slash"/> with &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
        </svg>
        &nbsp; in 100 Ladrillos Sonata, Guadalajara, MX.
      </p>

      <div className="social-icons">
        <ul className="list-unstyled d-flex justify-content-end">
          <li className="ms-3">
            <a className="link-body-emphasis" href="https://www.facebook.com/100Ladrillos">
              <i className="bi bi-facebook fs-3"/>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="https://www.instagram.com/100ladrillos">
              <i className="bi bi-instagram fs-3"/>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="https://twitter.com/100ladrillos">
              <i className="bi bi-twitter-x fs-3"/>
            </a>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default SubFooter