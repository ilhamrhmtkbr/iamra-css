export const data = [
    {
        title: 'layout',
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../../assets/styles/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<nav class="navigation">
    <a class="navigation-item active">Nav 1</a>
    <a class="navigation-item">Nav 2</a>
    <div class="navigation-items">
        <label class="navigation-item" for="navigation-items-check-1">Nav Items</label>
        <input type="checkbox" class="navigation-items-check" id="navigation-items-check-1">
        <div class="navigation-items-elements-modal">
            <div class="navigation-items-elements-content">
                <label class="navigation-items-elements-close" for="navigation-items-check-1">&Cross;</label>
                <a class="navigation-item active">Nav 3</a>
                <a class="navigation-item">Nav 4</a>
                <a class="navigation-item">Nav 5</a>
            </div>
        </div>
    </div>
</nav>
<aside class="sidebar">
    <div class="sidebar-header">
        <div class="sidebar-header-logo">
            <img class="sidebar-header-logo-img" alt="logo" src="../../assets/svg/iamra-logo.svg">
        </div>
        <div class="sidebar-header-title">Iamra</div>
    </div>
    <div class="sidebar-menu">
        <a class="sidebar-menu-item active" data-title="Item 1">
            <svg class="sidebar-menu-item-svg">
                <use></use>
            </svg>
            <span>Item 1</span>
        </a>
        <a class="sidebar-menu-item">
            <svg class="sidebar-menu-item-svg">
                <use></use>
            </svg>
            <span>Item 1</span>
        </a>
        <details class="sidebar-menu-accordion">
            <summary class="sidebar-menu-item" data-title="Elements">
                <svg class="sidebar-menu-item-svg">
                    <use href="#dimension"></use>
                </svg>
                <span>Elements</span>
            </summary>
            <div class="sidebar-menu-accordion-elements">
                <a class="sidebar-menu-item">Item 2</a>
                <a class="sidebar-menu-item">Item 3</a>
            </div>
        </details>
    </div>
    <div class="sidebar-button-hide sidebar-menu-item" onclick="sidebarMinify()">
        <svg class="sidebar-menu-item-svg">
            <use></use>
        </svg>
        <span>Hide</span>
    </div>
</aside>

<main class="container">
    <header class="container-header">
        <div class="container-header-button-switch-theme" onclick="switchTheme()">Dark Mode</div>
        <div class="container-header-nav">
            <a class="container-header-nav-item active">
                <span class="container-header-nav-item-text">Nav 1</span>
            </a>
            <div class="container-header-nav-items">
                <div class="container-header-nav-item">Nav Items</div>
                <div class="container-header-nav-items-element">
                    <a class="container-header-nav-item active">
                        <span class="container-header-nav-item-text">Nav 2</span>
                    </a>
                    <a class="container-header-nav-item">
                        <span class="container-header-nav-item-text">Nav 3</span>
                    </a>
                    <a class="container-header-nav-item">
                        <span class="container-header-nav-item-text">Nav 4</span>
                    </a>
                </div>
            </div>
        </div>
        <div class='container-header-button-show-sidebar' onclick="showMenu()">
            <svg id='get-menu' viewBox="0 0 100 100">
                <path class="line line1"
                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                <path class="line line2" d="M 20,50 H 80"/>
                <path class="line line3"
                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
            </svg>
        </div>
    </header>
    <section class="container-content">
    </section>
    <footer>

    </footer>
</main>
<script>
    function sidebarMinify() {
        document.getElementsByClassName("sidebar")[0].classList.toggle("collapse")
        document.getElementsByClassName("container")[0].classList.toggle("expanded")
    }
    function switchTheme() {
        document.getElementsByTagName("body")[0].classList.toggle("dark-mode")
    }
    function showMenu() {
        document.getElementsByClassName("sidebar")[0].classList.toggle("show")
        let iconGetMenu = document.getElementById('get-menu');
        iconGetMenu.classList.toggle('opened')
    }
</script>
</body>
</html>`,
    },
    {
        title: 'accordion',
        html: `
                <div class="accordion-item">
                    <input type="checkbox" id="accordion-item1" class="accordion-item-check"/>
                    <label for="accordion-item1" class="accordion-item-label">
                        <div class="flex-aic-jcb">
                            <p>What is Lorem Ipsum?</p>
                            <span>▼</span>
                        </div>
                        <div class="accordion-item-label-subtitle">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                    </label>
                    <div class="accordion-content">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <br />
                <div class="accordion-item">
                    <input type="checkbox" id="accordion-item2" class="accordion-item-check"/>
                    <label for="accordion-item2" class="accordion-item-label">
                        <div class="flex-aic-jcb">
                            <p>What is Lorem Ipsum?</p>
                            <span>▼</span>
                        </div>
                        <div class="accordion-item-label-subtitle">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                    </label>
                    <div class="accordion-content">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>`,

    },
    {
        title: 'badge',
        html: `
                <div class="flex-ais-jcs gap-m">
                    <div class="badge badge-close badge-primary">
                        <p>Message</p>
                        <div class="badge-button-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="badge badge-close badge-warning">
                        <p>Message</p>
                        <div class="badge-button-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="badge badge-close badge-success">
                        <p>Message</p>
                        <div class="badge-button-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="badge badge-close badge-danger">
                        <p>Message</p>
                        <div class="badge-button-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <br />

                <div class="flex-ais-jcs gap-m">
                    <div class="badge badge-small bg-primary">
                        <p>Message</p>
                    </div>
                    <div class="badge badge-small bg-warning">
                        <p>Message</p>
                    </div>
                    <div class="badge badge-small bg-success">
                        <p>Message</p>
                    </div>
                    <div class="badge badge-small bg-danger">
                        <p>Message</p>
                    </div>
                </div>`,

    },
    {
        title: 'bottom-sheet',
        html: `
                <div class="button bg-primary" onclick="showBottomSheet()">
                    Trigger
                </div>
                <div class="bottom-sheet">
                    <div class="bottom-sheet-header" onclick="showBottomSheet()">
                        🖱
                    </div>
                    <div class="bottom-sheet-content">
                        <h1>Example</h1>

                    </div>
                </div>`,

    },
    {
        title: 'breadcrumb',
        html: `
                <div class="breadcrumb">
                    <a class="breadcrumb-item active">menu a</a>
                    <span>></span>
                    <a class="breadcrumb-item">menu b</a>
                </div>`,

    },
    {
        title: 'button',
        html: `
                <div class="flex-ais-jcs gap-m mt-m">
                    <div class="button btn-primary">Example</div>
                    <a class="button badge-primary text-primary">Example</a>
                    <button class="button bg-primary">Example</button>
                    <button class="button badge-primary rounded text-primary">Example</button>
                </div>
                <br />
                <div class="flex-ais-jcs gap-m mt-m">
                    <div class="button btn-warning">Example</div>
                    <a class="button badge-warning text-warning">Example</a>
                    <button class="button bg-warning">Example</button>
                    <button class="button badge-warning rounded text-warning">Example</button>
                </div>
                <br />
                <div class="flex-ais-jcs gap-m mt-m">
                    <div class="button btn-success">Example</div>
                    <a class="button badge-success text-success">Example</a>
                    <button class="button bg-success">Example</button>
                    <button class="button badge-success rounded text-success">Example</button>
                </div>
                <br />
                <div class="flex-ais-jcs gap-m mt-m">
                    <div class="button btn-danger">Example</div>
                    <a class="button badge-danger text-danger">Example</a>
                    <button class="button bg-danger">Example</button>
                    <button class="button badge-danger rounded text-danger">Example</button>
                </div>`,

    },
    {
        title: 'card',
        html: `
                <div class="card-layout max-width-800">
                    <div class="card-wrapper">
                        <div>
                            <div class="card-wrapper-title">Ilham Rahmat Akbar</div>
                            <p>Fullstack Dev</p>
                            <small>Jakarta</small>
                        </div>
                        <div class="card-wrapper-actions">
                            <a class="text-primary">Hire</a>
                            <a class="text-success">Contact</a>
                        </div>
                        <p class="card-wrapper-date-time">5 min ago</p>
                    </div>
                    <div class="card-wrapper replace-shadow-with-border">
                        <div>
                            <div class="card-wrapper-title">Ilham Rahmat Akbar</div>
                            <p>Fullstack Dev</p>
                            <small>Jakarta</small>
                        </div>
                        <div class="card-wrapper-actions">
                            <a class="text-primary">Hire</a>
                            <a class="text-success">Contact</a>
                        </div>
                        <p class="card-wrapper-date-time">5 min ago</p>
                    </div>
                </div>`,

    },
    {
        title: 'data',
        html: `
                <div class="data">
                    <div class="data-key">Name</div>
                    <div class="data-value">Ilham Rahmat Akbar</div>
                </div>
                <br />
                <div class="data">
                    <div class="data-key">Position</div>
                    <div class="data-value">Fullstack</div>
                </div>`,

    },
    {
        title: 'form',
        html: `
            <div class="display-grid">
                <form class="card-wrapper replace-shadow-with-border">
                    <h3 class="text-center">Login</h3>
                    <fieldset class="ps-center">
                        <legend>Username</legend>
                        <input type="text"/>
                        <p class="text-error-msg">Error</p>
                    </fieldset>
                    <fieldset class="ps-center">
                        <legend>Password</legend>
                        <input type="password"/>
                        <p class="text-error-msg">Error</p>
                    </fieldset>
                    <button type="submit" class="button bg-primary ps-center">Submit</button>
                </form>

                <br/>
                <form class="card-wrapper replace-shadow-with-border">
                    <h3 class="text-center">Register</h3>
                    <div class="max-width-500 display-grid">
                        <label for="username">username</label>
                        <input name="username" type="text" placeholder="input" id="username"/>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <label for="option">option</label>
                        <select name="option" id="option">
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                        </select>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <label for="desc">desc</label>
                        <textarea name="desc" id="desc"></textarea>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <label for="files">resume</label>
                        <input name="files" type="file" id="files"/>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <label for="dob">date of birth</label>
                        <input name="dob" type="date" id="dob"/>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <button type="submit" class="button bg-primary ps-center">Submit</button>
                </form>
                <br/>
                <form class="card-wrapper replace-shadow-with-border">
                    <h3 class="text-center">Login like google</h3>
                    <div class="max-width-500 display-grid">
                        <div class="form-like-google">
                            <input class="form-like-google-input" name="email" type="email" placeholder=" "
                                   id="email"/>
                            <label class="form-like-google-label" for="email">Email</label>
                        </div>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <div class="form-like-google">
                            <input class="form-like-google-input" name="password" type="password" placeholder=" "
                                   id="password"/>
                            <label class="form-like-google-label" for="password">Password</label>
                        </div>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <button type="submit" class="button bg-primary ps-center">Submit</button>
                </form>
            </div>`,

    },
    {
        title: 'image',
        html: `
                <div class="picture-default rounded">
                    <img src="" alt="">
                </div>`,

    },
    {
        title: 'loading',
        html: `
                <div class="loading-spinner"></div>
                <br />
                <div class="loading-bar max-width-500">
                    <div class="loading-bar-progress with-animation-progress"></div>
                </div>
                <br />
                <div class="loading-pulse" style="width: 111px; height: 111px; border-radius: 12px"></div>`,

    },
    {
        title: 'modal',
        html: `
                <div class="button btn-primary" onclick="showModal()">Show</div>
                <div class="modal hide">
                    <div class="modal-box">
                        <div class="modal-header">
                            <p>Title</p>
                            <div class="badge-button-close" onclick="showModal()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                    <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="modal-content">content</div>
                        <div class="modal-footer">footer</div>
                    </div>
                </div>`,

    },
    {
        title: 'pagination',
        html: `
                <div class="flex-aic-jcb gap-x">
                    <div class="pagination">
                        <div class="pagination-elements">
                            <div class="pagination-item"><</div>
                            <div class="pagination-item active">1</div>
                            <div class="pagination-item">2</div>
                            <div class="pagination-item">3</div>
                            <div class="pagination-item">></div>
                        </div>
                    </div>
                    <div class="pagination-per-page">
                        <span>Per Page : </span>
                        <select>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                        </select>
                    </div>
                </div>`,

    },
    {
        title: 'stepper',
        html: `
                <div class="display-grid">
                    <div class="stepper">
                        <div class="stepper-item">
                            <div class="stepper-key active">1</div>
                            <div class="stepper-value">Resume</div>
                        </div>
                        <div class="stepper-divider"></div>
                        <div class="stepper-item">
                            <div class="stepper-key">2</div>
                            <div class="stepper-value">Email</div>
                        </div>
                        <div class="stepper-divider"></div>
                        <div class="stepper-item">
                            <div class="stepper-key">3</div>
                            <div class="stepper-value">Salary</div>
                        </div>
                    </div>
                </div>`,

    },
    {
        title: 'table',
        html: `
                <div class="display-grid">
                    <div class="table-content">
                        <table>
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1.</td>
                                <td class="fit">Example</td>
                                <td class="action">
                                    <a class="text-primary">save</a>
                                    <div class="text-success">edit</div>
                                    <form>
                                        <button class="button-clear-style text-warning">delete</button>
                                    </form>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`,

    },
    {
        title: 'timeline',
        html: `
                <div class="timeline">
                    <div>
                        <span class="timeline-key active">1</span>
                        <div class="timeline-divider active"></div> 
                    </div>
                    <div class="timeline-content max-width-400">
                        <div class="timeline-content-title">Project Started</div>
                        <div class="timeline-content-desc">The amazing UI showcase project began</div>
                        <div class="timeline-content-time">2 hours ago</div>
                    </div>
                    <div>
                        <span class="timeline-key">2</span>
                        <div class="timeline-divider"></div> 
                    </div>
                    <div class="timeline-content max-width-400">
                        <div class="timeline-content-title">Components Added</div>
                        <div class="timeline-content-desc">All major UI components have been implemented</div>
                        <div class="timeline-content-time">1 hours ago</div>
                    </div>
                    <div>
                        <span class="timeline-key">3</span>
                    </div>
                    <div class="timeline-content max-width-400">
                        <div class="timeline-content-title">Deploy to Production</div>
                        <div class="timeline-content-desc">Ready for launch</div>
                        <div class="timeline-content-time">Upcoming</div>
                    </div>
                </div>`,

    },
    {
        title: 'toast',
        html: `
                <div class="button btn-primary" onclick="showToast()">Click</div>
                <div class='toast display-none'>
                    <div class='bg-primary'>
                        <p>Message</p>
                        <div class='toast-button-close' onclick="showToast()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>`,

    },
    {
        title: 'toggle',
        html: `
                <div class="flex-aic-jcs gap-m">
                    <label class="toggle">
                        <input type="checkbox" class="toggle-check">
                        <span class="toggle-slider"></span>
                    </label>
                    <span class="toggle-status">sample</span>
                </div>`,

    },
    {
        title: 'tooltip',
        html: `
                <div class="flex-ais-jcs gap-m">
                    <p class="cursor-pointer" data-tooltip="Java">Java</p>
                    <p class="cursor-pointer" data-tooltip="Elixir">Elixir</p>
                </div>`,

    }
]