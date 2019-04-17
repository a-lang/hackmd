'use strict'
const app = require('electron').app
const Menu = require('electron').Menu
const shell = require('electron').shell
const name = app.getName()
const openAboutWindow = require('about-window').default
const join = require('path').join


module.exports = function createMainMenu() {
    const template = [{
            label: 'HackMD',
            submenu: [{
                label: 'Quit',
                accelerator: 'Cmd+Q',
                click: () => {
                    app.quit()
                }
            }]
        },
        {
            label: 'Edit',
            submenu: [{
                    label: 'Undo',
                    accelerator: 'CmdOrCtrl+Z',
                    role: 'undo'
                },
                {
                    label: 'Redo',
                    accelerator: 'Shift+CmdOrCtrl+Z',
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Cut',
                    accelerator: 'CmdOrCtrl+X',
                    role: 'cut'
                },
                {
                    label: 'Copy',
                    accelerator: 'CmdOrCtrl+C',
                    role: 'copy'
                },
                {
                    label: 'Paste',
                    accelerator: 'CmdOrCtrl+V',
                    role: 'paste'
                },
                {
                    label: 'Select All',
                    accelerator: 'CmdOrCtrl+A',
                    role: 'selectall'
                }
            ]
        },
        {
            label: 'View',
            submenu: [{
                    label: 'Reload',
                    accelerator: 'CmdOrCtrl+R',
                    click: (item, win) => {
                        if (win) win.reload()
                    }
                },
                {
                    label: 'Toggle Full Screen',
                    accelerator: 'Ctrl+Cmd+F',
                    click: (item, win) => {
                        if (win) win.setFullScreen(!win.isFullScreen())
                    }
                },
                {
                    label: 'Toggle Developer Tools',
                    accelerator: 'Alt+Cmd+I',
                    click: (item, win) => {
                        if (win) win.webContents.toggleDevTools()
                    }
                },
                {
                    type: 'separator'
                },
                {
                    role: 'resetzoom'
                },
                {
                    role: 'zoomin'
                },
                {
                    role: 'zoomout'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'togglefullscreen'
                }
            ]
        },
        {
            label: 'Window',
            role: 'window',
            submenu: [{
                    label: 'Minimize',
                    accelerator: 'CmdOrCtrl+M',
                    role: 'minimize'
                },
                {
                    label: 'Close',
                    accelerator: 'CmdOrCtrl+W',
                    role: 'close'
                }
            ]
        },
        {
            label: 'Help',
            role: 'help',
            submenu: [{
                    label: 'View on GitHub',
                    click: () => {
                        shell.openExternal('https://github.com/a-lang/hackmd')
                    }
                },
                {
                    label: 'HackMD.io Website ',
                    click: () => {
                        shell.openExternal('https://hackmd.io')
                    }
                },
                {
                    label: 'About ' + name,
                    click: () => openAboutWindow({
                        icon_path: join(__dirname, 'build/icon.png'),
                        license: 'MIT',
                        description: 'Unofficial HackMD.io Desktop App',
                        win_options: { autoHideMenuBar: true },
                    })
                },
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}