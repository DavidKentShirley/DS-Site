import React from 'react'
import './../css/projects.css'

export function Projects() {
  return (
    <body className="home-body">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="main">
        <h1>What is here</h1>
        <p>
          Most of the projects that I am workig on/completed will be here. Most will be on git hub
          and some will be on external sites. Feel free to check them out.
        </p>
        <div class="table-wrapper">
          <table class="fl-table">
              <thead>
              <tr>
                  <th>Project Name</th>
                  <th>Type</th>
                  <th>Link</th>
                  <th>% Completed</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>Content 1</td>
                  <td>Content 1</td>
                  <td>Content 1</td>
                  <td>Content 1</td>
              </tr>
              </tbody>
          </table>
      </div>
      </div>

    </body>
  )
}
