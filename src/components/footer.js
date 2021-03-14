import React from 'react';
import '../components/footer.css';
import wcs from '../components/assets/WCS.png';


function footer() {
    return (
        <div className='footer'>
            <img className='footer__wcs-logo' src={wcs} alt='wild code school logo' />

            <div className='footer__info'>
                <p>Made for</p>
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjYuMiIgaGVpZ2h0PSI1MCIgdmlld0JveD0iLTMxMyAzNzYgMTY2LjIgNTAiPjxnIGZpbGw9IiNGMTJFNDUiPjxwYXRoIGQ9Ik0tMTk1LjkgMzg1LjhoLTguOGMtLjIgMC0uNC4yLS40LjR2NS4xYzAgLjIuMi40LjQuNGg4LjhjLjIgMCAuNC0uMi40LS40di01LjFjLjEtLjItLjEtLjQtLjQtLjR6bS0uMSA3LjZoLTE3Yy0uMiAwLS41LjItLjYuNGwtMi4yIDguMy0uMS40LTIuNi04LjljLS4xLS4yLS4zLS40LS42LS40aC02LjZjLS4yIDAtLjUuMi0uNi40bC0yLjUgOC4zLS4xLjQtLjEtLjItMS00LjEtMS4xLTQuMWMtLjEtLjItLjMtLjQtLjYtLjRILTI0NXYtNy4yYzAtLjItLjMtLjUtLjYtLjRsLTguNCAyLjZjLS4zLjEtLjQuMi0uNC40djQuNWgtMi4yYy0uMiAwLS40LjItLjQuNHY2LjRjMCAuMi4yLjQuNC40aDIuMnY3LjhjMCA1LjUgMyA4LjEgOC41IDguMSAyLjMgMCA0LjUtLjUgNi0xLjN2LTYuNmMwLS4zLS4zLS40LS41LS40LS45LjQtMS42LjUtMi40LjUtMS41IDAtMi4zLS42LTIuMy0yLjN2LTUuN2g0LjhjLjIgMCAuNC0uMi40LS40di01LjRsNi4zIDIwLjljLjEuMi4zLjQuNi40aDdjLjIgMCAuNS0uMi42LS40bDMtOS4zIDEuNSA0LjggMS40IDQuNGMuMS4yLjMuNC42LjRoN2MuMiAwIC41LS4yLjYtLjRsNi40LTIxdjIxYzAgLjIuMi40LjQuNGg4LjVjLjIgMCAuNC0uMi40LS40di0yMS44YzAtLjMtLjItLjUtLjQtLjV6bTExLjItNy42aC04LjVjLS4yIDAtLjQuMi0uNC40djI5LjVjMCAuMi4yLjQuNC40aDguNWMuMiAwIC40LS4yLjQtLjR2LTI5LjVjMC0uMi0uMi0uNC0uNC0uNHptMTEuMyAwaC04LjhjLS4yIDAtLjQuMi0uNC40djUuMWMwIC4yLjIuNC40LjRoOC44Yy4yIDAgLjQtLjIuNC0uNHYtNS4xYy4xLS4yLS4xLS40LS40LS40em0tLjEgNy42aC04LjVjLS4yIDAtLjQuMi0uNC40djIxLjljMCAuMi4yLjQuNC40aDguNWMuMiAwIC40LS4yLjQtLjR2LTIxLjhjMC0uMy0uMi0uNS0uNC0uNXptMTQuMS0uNWMtNy41IDAtMTIuOCA1LjUtMTIuOCAxMS45di4xYzAgNi40IDUuMyAxMS44IDEyLjcgMTEuOCA3LjUgMCAxMi44LTUuNSAxMi44LTExLjl2LS4xYzAtNi40LTUuMy0xMS44LTEyLjctMTEuOHptMy42IDExLjljMCAyLjItMS41IDMuOS0zLjYgMy45cy0zLjctMS44LTMuNy00di0uMWMwLTIuMiAxLjUtMy45IDMuNi0zLjlzMy43IDEuOCAzLjcgNC4xek0tMjg4IDM3NmMtMTMuOCAwLTI1IDExLjItMjUgMjVzMTEuMiAyNSAyNSAyNSAyNS0xMS4yIDI1LTI1LTExLjItMjUtMjUtMjV6bTAgNDMuNGMtMTAuMiAwLTE4LjQtOC4yLTE4LjQtMTguNHM4LjItMTguNCAxOC40LTE4LjQgMTguNCA4LjIgMTguNCAxOC40LTguMiAxOC40LTE4LjQgMTguNHoiLz48Y2lyY2xlIGN4PSItMjgxLjgiIGN5PSIzOTQuOCIgcj0iNS4yIi8+PGNpcmNsZSBjeD0iLTI4MS44IiBjeT0iNDA3LjIiIHI9IjUuMiIvPjxjaXJjbGUgY3g9Ii0yOTQuMiIgY3k9IjQwNy4yIiByPSI1LjIiLz48Y2lyY2xlIGN4PSItMjk0LjIiIGN5PSIzOTQuOCIgcj0iNS4yIi8+PC9nPjwvc3ZnPg==' alt='Twilio logo' />
                <p>  hackaton by .....</p>
            </div>
            <div className='footer__github-links'>
                <a target="_blank" href="https://github.com/LapitskayaN"><img className='footer__gitHubLogo' 
                    src=' https://png2.cleanpng.com/sh/d403e464ed47e75e910c3f07b9fac271/L0KzQYm3VsA2N51xh5H0aYP2gLBuTfZ6dqppfJ91bHOwfLFuj71ocaVtjdQ2b4LqcbBwmvF1cZDzRdN3ZILoh376gB91fF46eqMBZUW6c4m4hMc5QV82UKM6NUa4SYK8UsgzOmg2UagAM0G8PsH1h5==/kisspng-fynydd-llc-logo-github-organization-andrew-scott-5b16e57c81d789.1811565915282271965319.png' alt='github logo' />Natalia</a>

                <a target="_blank" href="https://github.com/Zolotou"><img className='footer__gitHubLogo' src=' https://png2.cleanpng.com/sh/d403e464ed47e75e910c3f07b9fac271/L0KzQYm3VsA2N51xh5H0aYP2gLBuTfZ6dqppfJ91bHOwfLFuj71ocaVtjdQ2b4LqcbBwmvF1cZDzRdN3ZILoh376gB91fF46eqMBZUW6c4m4hMc5QV82UKM6NUa4SYK8UsgzOmg2UagAM0G8PsH1h5==/kisspng-fynydd-llc-logo-github-organization-andrew-scott-5b16e57c81d789.1811565915282271965319.png' alt='github logo' />Vadim</a>

                <a target="_blank" href="https://github.com/zalart"><img className='footer__gitHubLogo' src=' https://png2.cleanpng.com/sh/d403e464ed47e75e910c3f07b9fac271/L0KzQYm3VsA2N51xh5H0aYP2gLBuTfZ6dqppfJ91bHOwfLFuj71ocaVtjdQ2b4LqcbBwmvF1cZDzRdN3ZILoh376gB91fF46eqMBZUW6c4m4hMc5QV82UKM6NUa4SYK8UsgzOmg2UagAM0G8PsH1h5==/kisspng-fynydd-llc-logo-github-organization-andrew-scott-5b16e57c81d789.1811565915282271965319.png' alt='github logo' />Artur</a>

                <a target="_blank" href="https://github.com/FokinAlexey"><img className='footer__gitHubLogo' src=' https://png2.cleanpng.com/sh/d403e464ed47e75e910c3f07b9fac271/L0KzQYm3VsA2N51xh5H0aYP2gLBuTfZ6dqppfJ91bHOwfLFuj71ocaVtjdQ2b4LqcbBwmvF1cZDzRdN3ZILoh376gB91fF46eqMBZUW6c4m4hMc5QV82UKM6NUa4SYK8UsgzOmg2UagAM0G8PsH1h5==/kisspng-fynydd-llc-logo-github-organization-andrew-scott-5b16e57c81d789.1811565915282271965319.png' alt='github logo' />Alexey</a>
            </div>

        </div>

    )
}


export default footer
