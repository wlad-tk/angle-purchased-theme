Meteor.methods({
    sidebar: function() {

        var menu = [{
            "text": "Main Navigation",
            "heading": "true",
            "translate": "sidebar.heading.HEADER"
        }, {
            "text": "Dashboard",
            "sref": "#",
            "icon": "icon-speedometer",
            "alert": "3",
            "label": "label label-info",
            "submenu": [{
                "text": "Dashboard v1",
                "sref": "app.dashboard"
            }, {
                "text": "Dashboard v2",
                "sref": "app.dashboard_v2"
            }, {
                "text": "Dashboard v3",
                "sref": "app.dashboard_v3"
            }],
            "translate": "sidebar.nav.DASHBOARD"
        }, {
            "text": "Widgets",
            "sref": "app.widgets",
            "icon": "icon-grid",
            "alert": "30",
            "label": "label label-success",
            "translate": "sidebar.nav.WIDGETS"
        }, {
            "text": "Layouts",
            "sref": "#",
            "icon": "icon-layers",
            "submenu": [{
                "text": "Horizontal Nav",
                "sref": "app-h.dashboard_v2"
            }]
        }, {
            "text": "Components",
            "heading": "true",
            "translate": "sidebar.heading.COMPONENTS"
        }, {
            "text": "Elements",
            "sref": "#",
            "icon": "icon-chemistry",
            "submenu": [{
                "text": "Buttons",
                "sref": "app.buttons",
                "translate": "sidebar.nav.element.BUTTON"
            }, {
                "text": "Notifications",
                "sref": "app.notifications",
                "translate": "sidebar.nav.element.NOTIFICATION"
            }, {
                "text": "ngDialog",
                "sref": "app.ngdialog"
            }, {
                "text": "Sweet Alert",
                "sref": "app.sweetalert"
            }, {
                "text": "Tour",
                "sref": "app.tour"
            }, {
                "text": "Interaction",
                "sref": "app.interaction",
                "translate": "sidebar.nav.element.INTERACTION"
            }, {
                "text": "Carousel",
                "sref": "app.carousel"
            }, {
                "text": "Spinners",
                "sref": "app.spinners",
                "translate": "sidebar.nav.element.SPINNER"
            }, {
                "text": "Dropdown",
                "sref": "app.dropdown-animations",
                "translate": "sidebar.nav.element.DROPDOWN"
            }, {
                "text": "Nav Tree",
                "sref": "app.navtree"
            }, {
                "text": "Nestable",
                "sref": "app.nestable"
            }, {
                "text": "Sortable",
                "sref": "app.sortable"
            }, {
                "text": "Panels",
                "sref": "app.panels",
                "translate": "sidebar.nav.element.PANEL"
            }, {
                "text": "Portlets",
                "sref": "app.portlets",
                "translate": "sidebar.nav.element.PORTLET"
            }, {
                "text": "Grid",
                "sref": "app.grid",
                "translate": "sidebar.nav.element.GRID"
            }, {
                "text": "Grid Masonry",
                "sref": "app.grid-masonry",
                "translate": "sidebar.nav.element.GRID_MASONRY"
            }, {
                "text": "Grid Masonry Deck",
                "sref": "app.grid-masonry-deck"
            }, {
                "text": "Typography",
                "sref": "app.typo",
                "translate": "sidebar.nav.element.TYPO"
            }, {
                "text": "Font Icons",
                "sref": "app.icons-font",
                "alert": "+400",
                "translate": "sidebar.nav.element.FONT_ICON"
            }, {
                "text": "Weather Icons",
                "sref": "app.icons-weather",
                "alert": "+100",
                "translate": "sidebar.nav.element.WEATHER_ICON"
            }, {
                "text": "Colors",
                "sref": "app.colors",
                "translate": "sidebar.nav.element.COLOR"
            }, {
                "text": "Localization",
                "sref": "app.localization",
                "alert": "i18n"
            }, {
                "text": "Infinite scroll",
                "sref": "app.infinite-scroll"
            }],
            "translate": "sidebar.nav.element.ELEMENTS"
        }, {
            "text": "Forms",
            "sref": "#",
            "icon": "icon-note",
            "submenu": [{
                "text": "Standard",
                "sref": "app.form-standard",
                "translate": "sidebar.nav.form.STANDARD"
            }, {
                "text": "Extended",
                "sref": "app.form-extended",
                "translate": "sidebar.nav.form.EXTENDED"
            }, {
                "text": "Validation",
                "sref": "app.form-validation",
                "translate": "sidebar.nav.form.VALIDATION"
            }, {
                "text": "Wizard",
                "sref": "app.form-wizard",
                "translate": "sidebar.nav.form.WIZARD"
            }, {
                "text": "Upload",
                "sref": "app.form-upload",
                "translate": "sidebar.nav.form.UPLOAD"
            }, {
                "text": "xEditable",
                "sref": "app.form-xeditable"
            }, {
                "text": "Image Crop",
                "sref": "app.form-imagecrop"
            }, {
                "text": "uiSelect",
                "sref": "app.form-uiselect"
            }],
            "translate": "sidebar.nav.form.FORM"
        }, {
            "text": "Charts",
            "sref": "#",
            "icon": "icon-graph",
            "submenu": [{
                "text": "Flot",
                "sref": "app.chart-flot",
                "translate": "sidebar.nav.chart.FLOT"
            }, {
                "text": "Radial",
                "sref": "app.chart-radial",
                "translate": "sidebar.nav.chart.RADIAL"
            }, {
                "text": "Chart JS",
                "sref": "app.chart-js"
            }, {
                "text": "Rickshaw",
                "sref": "app.chart-rickshaw"
            }, {
                "text": "MorrisJS",
                "sref": "app.chart-morris"
            }, {
                "text": "Chartist",
                "sref": "app.chart-chartist"
            }],
            "translate": "sidebar.nav.chart.CHART"
        }, {
            "text": "Tables",
            "sref": "#",
            "icon": "icon-grid",
            "submenu": [{
                "text": "Standard",
                "sref": "app.table-standard",
                "translate": "sidebar.nav.table.STANDARD"
            }, {
                "text": "Extended",
                "sref": "app.table-extended",
                "translate": "sidebar.nav.table.EXTENDED"
            }, {
                "text": "DataTables",
                "sref": "app.table-datatable",
                "translate": "sidebar.nav.table.DATATABLE"
            }, {
                "text": "ngTables",
                "sref": "app.table-ngtable"
            }, {
                "text": "uiGrid",
                "sref": "app.table-uigrid"
            }, {
                "text": "xEditable",
                "sref": "app.table-xeditable"
            }, {
                "text": "Angular Grid",
                "sref": "app.table-angulargrid"
            }],
            "translate": "sidebar.nav.table.TABLE"
        }, {
            "text": "Maps",
            "sref": "#",
            "icon": "icon-map",
            "submenu": [{
                "text": "Google Maps",
                "sref": "app.maps-google",
                "translate": "sidebar.nav.map.GOOGLE"
            }, {
                "text": "Vector Maps",
                "sref": "app.maps-vector",
                "translate": "sidebar.nav.map.VECTOR"
            }],
            "translate": "sidebar.nav.map.MAP"
        }, {
            "text": "More",
            "heading": "true",
            "translate": "sidebar.heading.MORE"
        }, {
            "text": "Pages",
            "sref": "#",
            "icon": "icon-doc",
            "submenu": [{
                "text": "Login",
                "sref": "page.login",
                "translate": "sidebar.nav.pages.LOGIN"
            }, {
                "text": "Sign up",
                "sref": "page.register",
                "translate": "sidebar.nav.pages.REGISTER"
            }, {
                "text": "Recover Password",
                "sref": "page.recover",
                "translate": "sidebar.nav.pages.RECOVER"
            }, {
                "text": "Lock",
                "sref": "page.lock",
                "translate": "sidebar.nav.pages.LOCK"
            }, {
                "text": "Starter Template",
                "sref": "app.template",
                "translate": "sidebar.nav.pages.STARTER"
            }, {
                "text": "404",
                "sref": "page.404"
            }, {
                "text": "500",
                "sref": "page.500"
            }, {
                "text": "Maintenance",
                "sref": "page.maintenance"
            }],
            "translate": "sidebar.nav.pages.PAGES"
        }, {
            "text": "Extras",
            "sref": "#",
            "icon": "icon-cup",
            "submenu": [{
                "text": "Blog",
                "sref": "#",
                "icon": "fa fa-angle-right",
                "submenu": [{
                    "text": "List",
                    "sref": "app.blog"
                }, {
                    "text": "Post",
                    "sref": "app.blog-post"
                }, {
                    "text": "Articles",
                    "sref": "app.articles"
                }, {
                    "text": "Article View",
                    "sref": "app.article-view"
                }]
            }, {
                "text": "eCommerce",
                "sref": "#",
                "icon": "fa fa-angle-right",
                "submenu": [{
                    "text": "Orders",
                    "sref": "app.orders",
                    "alert": "10",
                    "label": "label label-info"
                }, {
                    "text": "Order View",
                    "sref": "app.order-view"
                }, {
                    "text": "Products",
                    "sref": "app.products"
                }, {
                    "text": "Product View",
                    "sref": "app.product-view"
                }, {
                    "text": "Checkout",
                    "sref": "app.checkout"
                }]
            }, {
                "text": "Forum",
                "sref": "app.forum"
            }, {
                "text": "Mailbox",
                "sref": "app.mailbox.folder",
                "params": {
                    "folder": "inbox"
                },
                "translate": "sidebar.nav.extra.MAILBOX"
            }, {
                "text": "Contacts",
                "sref": "app.contacts"
            }, {
                "text": "Contact details",
                "sref": "app.contact-details"
            }, {
                "text": "Projects",
                "sref": "app.projects"
            }, {
                "text": "Projects details",
                "sref": "app.project-details"
            }, {
                "text": "Team viewer",
                "sref": "app.team-viewer"
            }, {
                "text": "Social board",
                "sref": "app.social-board"
            }, {
                "text": "Vote links",
                "sref": "app.vote-links"
            }, {
                "text": "Bug tracker",
                "sref": "app.bug-tracker"
            }, {
                "text": "FAQ",
                "sref": "app.faq"
            }, {
                "text": "Help Center",
                "sref": "app.help-center"
            }, {
                "text": "Followers",
                "sref": "app.followers"
            }, {
                "text": "Settings",
                "sref": "app.settings"
            }, {
                "text": "Plans",
                "sref": "app.plans"
            }, {
                "text": "File manager",
                "sref": "app.file-manager"
            }, {
                "text": "Timeline",
                "sref": "app.timeline",
                "translate": "sidebar.nav.extra.TIMELINE"
            }, {
                "text": "Calendar",
                "sref": "app.calendar",
                "translate": "sidebar.nav.extra.CALENDAR"
            }, {
                "text": "Invoice",
                "sref": "app.invoice",
                "translate": "sidebar.nav.extra.INVOICE"
            }, {
                "text": "Search",
                "sref": "app.search",
                "translate": "sidebar.nav.extra.SEARCH"
            }, {
                "text": "Todo List",
                "sref": "app.todo",
                "translate": "sidebar.nav.extra.TODO"
            }, {
                "text": "Profile",
                "sref": "app.profile",
                "translate": "sidebar.nav.extra.PROFILE"
            }, {
                "text": "Code Editor",
                "sref": "app.code-editor"
            }],
            "translate": "sidebar.nav.extra.EXTRA"
        }, {
            "text": "Documentation",
            "sref": "app.documentation",
            "icon": "icon-graduation",
            "translate": "sidebar.nav.DOCUMENTATION"
        }];

        return menu;
    }

});