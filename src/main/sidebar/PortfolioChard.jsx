import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function PortfolioChard() {
  return (
    <div class="parent">
    <div class="card1">
       
        <div class="glass1"></div>
        <div class="content1">
            <span class="title">UIVERSE (3D UI)</span>
            <span class="text">Create, share, and use beautiful custom elements made with CSS</span>
        </div>
        <div class="bottom">
            
            <div class="social-buttons-container">
               <GitHubIcon class="social-button .social-button1"/>
               <GitHubIcon class="social-button .social-button2"/>
               <GitHubIcon class="social-button .social-button3"/>
            </div>
            <div class="view-more">
                <button class="view-more-button">View more</button>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
            </div>
        </div>
    </div>
</div>
  )
}

export default PortfolioChard
