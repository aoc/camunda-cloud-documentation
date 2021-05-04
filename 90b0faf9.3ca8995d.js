(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),o=(n(0),n(454)),r={id:"authentication",title:"Authentication"},l={unversionedId:"product-manuals/zeebe/operations/authentication",id:"version-0.25/product-manuals/zeebe/operations/authentication",isDocsHomePage:!1,title:"Authentication",description:"Zeebe supports transport layer security between the gateway and all of the officially supported clients. In this section, we will go through how to configure these components.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/operations/authentication.md",slug:"/product-manuals/zeebe/operations/authentication",permalink:"/docs/0.25/product-manuals/zeebe/operations/authentication",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/operations/authentication.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/operations/security"},next:{title:"Authorization",permalink:"/docs/0.25/product-manuals/zeebe/operations/authorization"}},c=[{value:"Gateway",id:"gateway",children:[]},{value:"Clients",id:"clients",children:[{value:"Java",id:"java",children:[]},{value:"Go",id:"go",children:[]},{value:"zbctl",id:"zbctl",children:[]}]},{value:"Troubleshooting authentication issues",id:"troubleshooting-authentication-issues",children:[{value:"TLS is enabled in zbctl but disabled in the gateway",id:"tls-is-enabled-in-zbctl-but-disabled-in-the-gateway",children:[]},{value:"TLS is disabled in zbctl but enabled for the gateway",id:"tls-is-disabled-in-zbctl-but-enabled-for-the-gateway",children:[]},{value:"TLS is enabled for both client and gateway but the CA certificate can&#39;t be found",id:"tls-is-enabled-for-both-client-and-gateway-but-the-ca-certificate-cant-be-found",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Zeebe supports transport layer security between the gateway and all of the officially supported clients. In this section, we will go through how to configure these components."),Object(o.b)("h2",{id:"gateway"},"Gateway"),Object(o.b)("p",null,"Transport layer security in the gateway is disabled by default. This means that if you are just experimenting with Zeebe or in development, there is no configuration needed. However, if you want to enable authentication you can configure Zeebe in the ",Object(o.b)("inlineCode",{parentName:"p"},"security")," section of the configuration files. The following configurations are present in both ",Object(o.b)("inlineCode",{parentName:"p"},"gateway.yaml.template")," and ",Object(o.b)("inlineCode",{parentName:"p"},"broker.standalone.yaml.template"),", the file you should edit depends on whether you are using a standalone gateway or an embedded gateway."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"...\n  security:\n    # Enables TLS authentication between clients and the gateway\n    enabled: false\n\n    # Sets the path to the certificate chain file\n    certificateChainPath:\n\n    # Sets the path to the private key file location\n    privateKeyPath:\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"enabled")," should be either ",Object(o.b)("inlineCode",{parentName:"p"},"true")," or ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", where true will enable TLS authentication between client and gateway, and false will disable it. ",Object(o.b)("inlineCode",{parentName:"p"},"certificateChainPath")," and ",Object(o.b)("inlineCode",{parentName:"p"},"privateKeyPath")," are used to configure the certificate with which the server will authenticate itself. ",Object(o.b)("inlineCode",{parentName:"p"},"certificateChainPath")," should be a file path pointing to a certificate chain in PEM format representing the server's certificate, and ",Object(o.b)("inlineCode",{parentName:"p"},"privateKeyPath")," a file path pointing to the certificate's PKCS8 private key, also in PEM format."),Object(o.b)("p",null,"Additionally, as you can see in the configuration file, each value can also be configured through an environment variable. The environment variable to use again depends on whether you are using a standalone gateway or an embedded gateway."),Object(o.b)("h2",{id:"clients"},"Clients"),Object(o.b)("p",null,"Unlike the gateway, TLS is enabled by default in all of Zeebe's supported clients. The following sections will show how to disable or properly configure each client."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," Disabling TLS should only be done for testing or development. During production deployments, clients and gateways should be properly configured to establish secure connections.")),Object(o.b)("h3",{id:"java"},"Java"),Object(o.b)("p",null,"Without any configuration, the client will look in system's certificate store for a CA certificate with which to validate the gateway's certificate chain. If you wish to use TLS without having to install a certificate in client's system, you can specify a CA certificate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class SecureClient {\n    public static void main(final String[] args) {\n        final ZeebeClient client = ZeebeClient.newClientBuilder().caCertificatePath("path/to/certificate").build();\n\n        // ...\n    }\n}\n')),Object(o.b)("p",null,"Alternatively, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"ZEEBE_CA_CERTIFICATE_PATH")," environment variable to override the code configuration."),Object(o.b)("p",null,"In order to disable TLS in a Java client, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},".usePlaintext()")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class InsecureClient {\n    public static void main(final String[] args) {\n        final ZeebeClient client = ZeebeClient.newClientBuilder().usePlaintext().build();\n\n        // ...\n    }\n}\n")),Object(o.b)("p",null,"Alternatively, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"ZEEBE_INSECURE_CONNECTION"),' environment variable to override the code configuration. To enable an insecure connection, you can it to "true". To use a secure connection, you can set it any non-empty value other than "true". Setting the environment variable to an empty string is equivalent to unsetting it.'),Object(o.b)("h3",{id:"go"},"Go"),Object(o.b)("p",null,"Similarly to the Java client, if no CA certificate is specified then the client will look in the default location for a CA certificate with which to validate the gateway's certificate chain. It's also possible to specify a path to a CA certificate in the Go client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package test\n\nimport (\n    "github.com/zeebe-io/zeebe/clients/go/zbc"\n)\n\n\nfunc main() {\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        CaCertificatePath: "path/to/certificate",\n    })\n\n    // ...\n}\n')),Object(o.b)("p",null,"To disable TLS, you can simply do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package test\n\nimport (\n    "github.com/zeebe-io/zeebe/clients/go/zbc"\n)\n\n\nfunc main() {\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        UsePlaintextConnection: true,\n    })\n\n  // ...\n}\n')),Object(o.b)("p",null,"As in the Java client, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"ZEEBE_INSECURE_CONNECTION")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ZEEBE_CA_CERTIFICATE_PATH")," to override these configurations."),Object(o.b)("h3",{id:"zbctl"},"zbctl"),Object(o.b)("p",null,"To configure zbctl to use a path to a CA certificate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"./zbctl --certPath /my/certificate/location <command> [arguments]\n")),Object(o.b)("p",null,"To configure zbctl to disable TLS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"./zbctl --insecure <command> [arguments]\n")),Object(o.b)("p",null,"Since zbctl is based on the Go client, setting the appropriate environment variables will override these parameters."),Object(o.b)("h2",{id:"troubleshooting-authentication-issues"},"Troubleshooting authentication issues"),Object(o.b)("p",null,"Here we will describe a few ways that the clients and gateway could be misconfigured and what those errors look like. Hopefully, this will help you recognize these situations and provide you with an easy fix."),Object(o.b)("h3",{id:"tls-is-enabled-in-zbctl-but-disabled-in-the-gateway"},"TLS is enabled in zbctl but disabled in the gateway"),Object(o.b)("p",null,"The client will fail with the following error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Error: rpc error: code = Unavailable desc = all SubConns are in TransientFailure, latest connection error: connection error: desc = "transport: authentication handshake failed: tls: first record does not look like a TLS handshake"\n')),Object(o.b)("p",null,"And the following error will be logged by Netty in the gateway:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Aug 06, 2019 4:23:22 PM io.grpc.netty.NettyServerTransport notifyTerminated\nINFO: Transport failed\nio.netty.handler.codec.http2.Http2Exception: HTTP/2 client preface string missing or corrupt. Hex dump for received bytes: 1603010096010000920303d06091559c43ec48a18b50c028\n  at io.netty.handler.codec.http2.Http2Exception.connectionError(Http2Exception.java:103)\n  at io.netty.handler.codec.http2.Http2ConnectionHandler$PrefaceDecoder.readClientPrefaceString(Http2ConnectionHandler.java:306)\n  at io.netty.handler.codec.http2.Http2ConnectionHandler$PrefaceDecoder.decode(Http2ConnectionHandler.java:239)\n  at io.netty.handler.codec.http2.Http2ConnectionHandler.decode(Http2ConnectionHandler.java:438)\n  at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:505)\n  at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:444)\n  at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:283)\n  at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:374)\n  at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:360)\n  at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:352)\n  at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1421)\n  at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:374)\n  at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:360)\n  at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:930)\n  at io.netty.channel.epoll.AbstractEpollStreamChannel$EpollStreamUnsafe.epollInReady(AbstractEpollStreamChannel.java:794)\n  at io.netty.channel.epoll.EpollEventLoop.processReady(EpollEventLoop.java:424)\n  at io.netty.channel.epoll.EpollEventLoop.run(EpollEventLoop.java:326)\n  at io.netty.util.concurrent.SingleThreadEventExecutor$5.run(SingleThreadEventExecutor.java:918)\n  at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\n  at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\n  at java.lang.Thread.run(Thread.java:748)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution:")," Either enable TLS in the gateway as well or specify the ",Object(o.b)("inlineCode",{parentName:"p"},"--insecure")," flag when using zbctl."),Object(o.b)("h3",{id:"tls-is-disabled-in-zbctl-but-enabled-for-the-gateway"},"TLS is disabled in zbctl but enabled for the gateway"),Object(o.b)("p",null,"zbctl will fail with the following error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Error: rpc error: code = Unavailable desc = all SubConns are in TransientFailure, latest connection error: connection closed\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution:")," Either enable TLS in the client by specifying a path to a certificate or disable it in the gateway by editing the appropriate configuration file."),Object(o.b)("h3",{id:"tls-is-enabled-for-both-client-and-gateway-but-the-ca-certificate-cant-be-found"},"TLS is enabled for both client and gateway but the CA certificate can't be found"),Object(o.b)("p",null,"zbctl will fail with the following error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Error: rpc error: code = Unavailable desc = all SubConns are in TransientFailure, latest connection error: connection error: desc = "transport: authentication handshake failed: x509: certificate signed by unknown authority\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution:")," Either install the CA certificate in the appropriate location for the system or specify a path to certificate using the methods described above."))}s.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,h=u["".concat(r,".").concat(p)]||u[p]||d[p]||o;return n?i.a.createElement(h,l(l({ref:t},b),{},{components:n})):i.a.createElement(h,l({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);