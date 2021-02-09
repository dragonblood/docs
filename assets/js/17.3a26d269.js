(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{385:function(t,a,s){"use strict";s.r(a);var e=s(40),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[t._v("#")]),t._v(" Middleware")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Middleware provide a convenient mechanism for filtering HTTP requests entering your application. Additional middleware\ncan be written to perform a variety of tasks. A CORS middleware might be responsible for adding the proper headers to\nall responses leaving your application. A logging middleware might log all incoming requests to your application.")]),t._v(" "),s("p",[t._v("There are several middleware included in the Confetti framework. All of these middleware are located in\nthe "),s("code",[t._v("app/http/middleware")]),t._v(" directory.")]),t._v(" "),s("h2",{attrs:{id:"defining-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-middleware"}},[t._v("#")]),t._v(" Defining Middleware")]),t._v(" "),s("p",[t._v("Let's place a new "),s("code",[t._v("EnsureTokenIsValid")]),t._v(" struct within your "),s("code",[t._v("app/http/middleware")]),t._v(" directory. In this middleware, we will only allow access to the route if the supplied "),s("code",[t._v("token")]),t._v(" is valid. Otherwise, we will redirect the users back to the "),s("code",[t._v("home")]),t._v(" URI:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" middleware\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/confetti-framework/contract/inter"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/confetti-framework/routing/outcome"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" EnsureTokenIsValid "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c EnsureTokenIsValid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-secret-token"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" outcome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RedirectTemporary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('To pass the request deeper into the application (allowing the middleware to "pass"), call the '),s("code",[t._v("next")]),t._v(" callback with the "),s("code",[t._v("request")]),t._v(". Then the request will be passed further into the application.")]),t._v(" "),s("p",[t._v('It\'s best to envision middleware as a series of "layers" HTTP requests must pass through before they hit your application. Each layer can examine the request and even reject it entirely.')]),t._v(" "),s("blockquote",[s("p",[t._v("The request contains the "),s("a",{attrs:{href:"../architecture-concepts/container"}},[t._v("service container")]),t._v(", so you may fetch any dependencies you need with "),s("code",[t._v("request.Make(...)")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"before-after-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#before-after-middleware"}},[t._v("#")]),t._v(" Before & After Middleware")]),t._v(" "),s("p",[t._v("Whether a middleware runs before or after a request depends on the middleware itself. For example, the following middleware would perform some task "),s("strong",[t._v("before")]),t._v(" the request is handled by the application:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" middleware\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/confetti-framework/contract/inter"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" BeforeMiddleware "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c BeforeMiddleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Perform action")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("However, this middleware would perform its task "),s("strong",[t._v("after")]),t._v(" the request is handled by the application:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" middleware\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/confetti-framework/contract/inter"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" AfterMiddleware "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c AfterMiddleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Perform action")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"registering-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registering-middleware"}},[t._v("#")]),t._v(" Registering Middleware")]),t._v(" "),s("h3",{attrs:{id:"global-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-middleware"}},[t._v("#")]),t._v(" Global Middleware")]),t._v(" "),s("p",[t._v("If you want a middleware to run during every HTTP request to your application, list the middleware struct in\nthe "),s("code",[t._v("globalMiddlewares")]),t._v(" variable in your "),s("code",[t._v("providers.RouteServiceProvider")]),t._v(" located\nin "),s("code",[t._v("app/providers/route_service_provider.go")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"assigning-middleware-to-routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assigning-middleware-to-routes"}},[t._v("#")]),t._v(" Assigning Middleware To Routes")]),t._v(" "),s("p",[t._v("If you would like to assign middleware to specific routes, you can use the "),s("code",[t._v("Middleware")]),t._v(" method to pass the struct of the middleware:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/admin/profile"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AdminProfileStore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidatePostSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CheckAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("When assigning middleware to a group of routes, you may occasionally need to prevent the middleware from being applied to an individual route within the group. You may accomplish this using the "),s("code",[t._v("WithoutMiddleware")]),t._v(" method:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/roles"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Roles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/comments"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Comments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithoutMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CheckAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidatePostSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CheckAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("WithoutMiddleware")]),t._v(" method can only remove route middleware and does not apply to "),s("a",{attrs:{href:"#global-middleware"}},[t._v("global middleware")]),t._v(". Supply parameters to the struct of WithoutMiddleware has no effect and is therefore superfluous.")]),t._v(" "),s("h3",{attrs:{id:"middleware-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware-groups"}},[t._v("#")]),t._v(" Middleware Groups")]),t._v(" "),s("p",[t._v("Sometimes you may want to group several middleware under a single key to make them easier to assign to routes. We call this Middleware Groups.")]),t._v(" "),s("p",[t._v("Out of the box, Confetti comes with "),s("code",[t._v("Web")]),t._v(" and "),s("code",[t._v("Api")]),t._v(" middleware groups that contain common middlewares you may want to apply to your web UI and API routes. Let's see how the Web middleware group might look like:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" middleware\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/confetti-framework/contract/inter"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Web "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HttpMiddleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    EncryptCookies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    AddQueuedCookiesToResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    StartSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ShareErrorsFromSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    VerifyCsrfToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SubstituteBindings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Middleware groups can be loaded by using the spread operator in the "),s("code",[t._v("Middleware")]),t._v(" method. Again, middleware groups make it more convenient to assign many middlewares to a route at once:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Out of the box, the "),s("code",[t._v("Web")]),t._v(" middleware group is automatically applied to your web routes by "),s("code",[t._v("routes/web.go")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"middleware-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware-parameters"}},[t._v("#")]),t._v(" Middleware Parameters")]),t._v(" "),s("p",[t._v('Middleware can also receive additional parameters. For example, if your application needs to verify that the authenticated user has a given "role" before performing a given action, you could create a '),s("code",[t._v("CheckRole")]),t._v(" middleware that receives a role name as an additional public field.")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" middleware\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/confetti-framework/contract/inter"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/confetti-framework/routing/outcome"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"confetti/src/request-adapter"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" CheckRole "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Role "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c CheckRole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" inter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" requestAdapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CurrentUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Role")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Role "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" outcome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RedirectTemporary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can pass the parameters to the public fields of the middleware:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CheckRole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Role"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"editor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);