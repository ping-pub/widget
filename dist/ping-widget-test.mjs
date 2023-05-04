(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root,[data-theme]{background-color:hsla(var(--b1) / var(--tw-bg-opacity, 1));color:hsla(var(--bc) / var(--tw-text-opacity, 1))}html{-webkit-tap-highlight-color:transparent}:root{color-scheme:light;--pf: 258.89 94.378% 40.941%;--sf: 314 100% 37.647%;--af: 174 60% 40.784%;--nf: 219 14.085% 22.275%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 258.89 94.378% 51.176%;--pc: 0 0% 100%;--s: 314 100% 47.059%;--sc: 0 0% 100%;--a: 174 60% 50.98%;--ac: 174.71 43.59% 15.294%;--n: 219 14.085% 27.843%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 94.902%;--b3: 180 1.9608% 90%;--bc: 215 27.907% 16.863%}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--pf: 262.35 80.315% 40.157%;--sf: 315.75 70.196% 40%;--af: 174.69 70.335% 32.784%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 262.35 80.315% 50.196%;--pc: 0 0% 100%;--s: 315.75 70.196% 50%;--sc: 0 0% 100%;--a: 174.69 70.335% 40.98%;--ac: 0 0% 100%;--n: 218.18 18.033% 11.961%;--nf: 222.86 17.073% 8.0392%;--nc: 220 13.376% 69.216%;--b1: 220 17.647% 20%;--b2: 220 17.241% 17.059%;--b3: 218.57 17.949% 15.294%;--bc: 220 13.376% 69.216%}}[data-theme=light]{color-scheme:light;--pf: 258.89 94.378% 40.941%;--sf: 314 100% 37.647%;--af: 174 60% 40.784%;--nf: 219 14.085% 22.275%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 258.89 94.378% 51.176%;--pc: 0 0% 100%;--s: 314 100% 47.059%;--sc: 0 0% 100%;--a: 174 60% 50.98%;--ac: 174.71 43.59% 15.294%;--n: 219 14.085% 27.843%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 94.902%;--b3: 180 1.9608% 90%;--bc: 215 27.907% 16.863%}[data-theme=dark]{color-scheme:dark;--pf: 262.35 80.315% 40.157%;--sf: 315.75 70.196% 40%;--af: 174.69 70.335% 32.784%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 262.35 80.315% 50.196%;--pc: 0 0% 100%;--s: 315.75 70.196% 50%;--sc: 0 0% 100%;--a: 174.69 70.335% 40.98%;--ac: 0 0% 100%;--n: 218.18 18.033% 11.961%;--nf: 222.86 17.073% 8.0392%;--nc: 220 13.376% 69.216%;--b1: 220 17.647% 20%;--b2: 220 17.241% 17.059%;--b3: 218.57 17.949% 15.294%;--bc: 220 13.376% 69.216%}[data-theme=cupcake]{color-scheme:light;--pf: 183.03 47.368% 47.216%;--sf: 338.25 71.429% 62.431%;--af: 39 84.112% 46.431%;--nf: 280 46.479% 11.137%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 183.03 100% 11.804%;--sc: 338.25 100% 15.608%;--ac: 39 100% 11.608%;--nc: 280 82.688% 82.784%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--p: 183.03 47.368% 59.02%;--s: 338.25 71.429% 78.039%;--a: 39 84.112% 58.039%;--n: 280 46.479% 13.922%;--b1: 24 33.333% 97.059%;--b2: 26.667 21.951% 91.961%;--b3: 22.5 14.286% 89.02%;--bc: 280 46.479% 13.922%;--rounded-btn: 1.9rem;--tab-border: 2px;--tab-radius: .5rem}[data-theme=bumblebee]{color-scheme:light;--pf: 41.124 74.167% 42.353%;--sf: 49.901 94.393% 46.431%;--af: 240 33.333% 11.294%;--nf: 240 33.333% 11.294%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 0% 20%;--ac: 240 60.274% 82.824%;--nc: 240 60.274% 82.824%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 41.124 74.167% 52.941%;--pc: 240 33.333% 14.118%;--s: 49.901 94.393% 58.039%;--sc: 240 33.333% 14.118%;--a: 240 33.333% 14.118%;--n: 240 33.333% 14.118%;--b1: 0 0% 100%}[data-theme=emerald]{color-scheme:light;--pf: 141.18 50% 48%;--sf: 218.88 96.078% 48%;--af: 9.8901 81.25% 44.863%;--nf: 219.23 20.312% 20.078%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 141.18 50% 60%;--pc: 151.11 28.421% 18.627%;--s: 218.88 96.078% 60%;--sc: 210 20% 98.039%;--a: 9.8901 81.25% 56.078%;--ac: 210 20% 98.039%;--n: 219.23 20.312% 25.098%;--nc: 210 20% 98.039%;--b1: 0 0% 100%;--bc: 219.23 20.312% 25.098%;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1}[data-theme=corporate]{color-scheme:light;--pf: 229.09 95.652% 51.137%;--sf: 214.91 26.316% 47.216%;--af: 154.2 49.02% 48%;--nf: 233.33 27.273% 10.353%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 229.09 100% 92.784%;--sc: 214.91 100% 11.804%;--ac: 154.2 100% 12%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 229.09 95.652% 63.922%;--s: 214.91 26.316% 59.02%;--a: 154.2 49.02% 60%;--n: 233.33 27.273% 12.941%;--nc: 210 38.462% 94.902%;--b1: 0 0% 100%;--bc: 233.33 27.273% 12.941%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1}[data-theme=synthwave]{color-scheme:dark;--pf: 320.73 69.62% 55.216%;--sf: 197.03 86.592% 51.922%;--af: 48 89.041% 45.647%;--nf: 253.22 60.825% 15.216%;--b2: 253.85 59.091% 23.294%;--b3: 253.85 59.091% 20.965%;--pc: 320.73 100% 13.804%;--sc: 197.03 100% 12.98%;--ac: 48 100% 11.412%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 320.73 69.62% 69.02%;--s: 197.03 86.592% 64.902%;--a: 48 89.041% 57.059%;--n: 253.22 60.825% 19.02%;--nc: 260 60% 98.039%;--b1: 253.85 59.091% 25.882%;--bc: 260 60% 98.039%;--in: 199.13 86.957% 63.922%;--inc: 257.45 63.218% 17.059%;--su: 168.1 74.233% 68.039%;--suc: 257.45 63.218% 17.059%;--wa: 48 89.041% 57.059%;--wac: 257.45 63.218% 17.059%;--er: 351.85 73.636% 56.863%;--erc: 260 60% 98.039%}[data-theme=retro]{color-scheme:light;--pf: 2.6667 73.77% 60.863%;--sf: 144.62 27.273% 57.569%;--af: 49.024 67.213% 60.863%;--nf: 41.667 16.822% 33.569%;--inc: 221.21 100% 90.667%;--suc: 142.13 100% 87.255%;--wac: 32.133 100% 8.7451%;--erc: 0 100% 90.118%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 2.6667 73.77% 76.078%;--pc: 345 5.2632% 14.902%;--s: 144.62 27.273% 71.961%;--sc: 345 5.2632% 14.902%;--a: 49.024 67.213% 76.078%;--ac: 345 5.2632% 14.902%;--n: 41.667 16.822% 41.961%;--nc: 45 47.059% 80%;--b1: 45 47.059% 80%;--b2: 45.283 37.063% 71.961%;--b3: 42.188 35.955% 65.098%;--bc: 345 5.2632% 14.902%;--in: 221.21 83.193% 53.333%;--su: 142.13 76.216% 36.275%;--wa: 32.133 94.619% 43.725%;--er: 0 72.222% 50.588%;--rounded-box: .4rem;--rounded-btn: .4rem;--rounded-badge: .4rem}[data-theme=cyberpunk]{color-scheme:light;--pf: 344.78 100% 58.353%;--sf: 195.12 80.392% 56%;--af: 276 74.324% 56.784%;--nf: 57.273 100% 10.353%;--b2: 56 100% 45%;--b3: 56 100% 40.5%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 56 100% 10%;--pc: 344.78 100% 14.588%;--sc: 195.12 100% 14%;--ac: 276 100% 14.196%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;--p: 344.78 100% 72.941%;--s: 195.12 80.392% 70%;--a: 276 74.324% 70.98%;--n: 57.273 100% 12.941%;--nc: 56 100% 50%;--b1: 56 100% 50%;--rounded-box: 0;--rounded-btn: 0;--rounded-badge: 0;--tab-radius: 0}[data-theme=valentine]{color-scheme:light;--pf: 353.23 73.81% 53.647%;--sf: 254.12 86.441% 61.49%;--af: 181.41 55.556% 56%;--nf: 336 42.857% 38.431%;--b2: 318.46 46.429% 80.118%;--b3: 318.46 46.429% 72.106%;--pc: 353.23 100% 13.412%;--sc: 254.12 100% 15.373%;--ac: 181.41 100% 14%;--inc: 221.21 100% 90.667%;--suc: 142.13 100% 87.255%;--wac: 32.133 100% 8.7451%;--erc: 0 100% 90.118%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 353.23 73.81% 67.059%;--s: 254.12 86.441% 76.863%;--a: 181.41 55.556% 70%;--n: 336 42.857% 48.039%;--nc: 318.46 46.429% 89.02%;--b1: 318.46 46.429% 89.02%;--bc: 343.64 38.462% 28.039%;--in: 221.21 83.193% 53.333%;--su: 142.13 76.216% 36.275%;--wa: 32.133 94.619% 43.725%;--er: 0 72.222% 50.588%;--rounded-btn: 1.9rem}[data-theme=halloween]{color-scheme:dark;--pf: 31.927 89.344% 41.725%;--sf: 271.22 45.794% 33.569%;--af: 91.071 100% 26.353%;--nf: 180 3.5714% 8.7843%;--b2: 0 0% 11.647%;--b3: 0 0% 10.482%;--bc: 0 0% 82.588%;--sc: 271.22 100% 88.392%;--ac: 91.071 100% 6.5882%;--nc: 180 4.8458% 82.196%;--inc: 221.21 100% 90.667%;--suc: 142.13 100% 87.255%;--wac: 32.133 100% 8.7451%;--erc: 0 100% 90.118%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 31.927 89.344% 52.157%;--pc: 180 7.3171% 8.0392%;--s: 271.22 45.794% 41.961%;--a: 91.071 100% 32.941%;--n: 180 3.5714% 10.98%;--b1: 0 0% 12.941%;--in: 221.21 83.193% 53.333%;--su: 142.13 76.216% 36.275%;--wa: 32.133 94.619% 43.725%;--er: 0 72.222% 50.588%}[data-theme=garden]{color-scheme:light;--pf: 138.86 15.982% 34.353%;--sf: 96.923 37.143% 74.51%;--af: 0 67.742% 75.137%;--nf: 0 3.9106% 28.078%;--b2: 0 4.3478% 81.882%;--b3: 0 4.3478% 73.694%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 138.86 100% 88.588%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 138.86 15.982% 42.941%;--s: 96.923 37.143% 93.137%;--sc: 96 32.468% 15.098%;--a: 0 67.742% 93.922%;--ac: 0 21.951% 16.078%;--n: 0 3.9106% 35.098%;--nc: 0 4.3478% 90.98%;--b1: 0 4.3478% 90.98%;--bc: 0 3.2258% 6.0784%}[data-theme=forest]{color-scheme:dark;--pf: 141.04 71.963% 33.569%;--sf: 140.98 74.694% 38.431%;--af: 35.148 68.98% 41.569%;--nf: 0 9.6774% 4.8627%;--b2: 0 12.195% 7.2353%;--b3: 0 12.195% 6.5118%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 11.727% 81.608%;--sc: 140.98 100% 9.6078%;--ac: 35.148 100% 10.392%;--nc: 0 6.8894% 81.216%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 141.04 71.963% 41.961%;--pc: 140.66 100% 88.039%;--s: 140.98 74.694% 48.039%;--a: 35.148 68.98% 51.961%;--n: 0 9.6774% 6.0784%;--b1: 0 12.195% 8.0392%;--rounded-btn: 1.9rem}[data-theme=aqua]{color-scheme:dark;--pf: 181.79 92.857% 39.529%;--sf: 274.41 30.909% 45.49%;--af: 47.059 100% 64%;--nf: 205.4 53.725% 40%;--b2: 218.61 52.511% 38.647%;--b3: 218.61 52.511% 34.782%;--bc: 218.61 100% 88.588%;--sc: 274.41 100% 91.373%;--ac: 47.059 100% 16%;--nc: 205.4 100% 90%;--inc: 221.21 100% 90.667%;--suc: 142.13 100% 87.255%;--wac: 32.133 100% 8.7451%;--erc: 0 100% 90.118%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 181.79 92.857% 49.412%;--pc: 181.41 100% 16.667%;--s: 274.41 30.909% 56.863%;--a: 47.059 100% 80%;--n: 205.4 53.725% 50%;--b1: 218.61 52.511% 42.941%;--in: 221.21 83.193% 53.333%;--su: 142.13 76.216% 36.275%;--wa: 32.133 94.619% 43.725%;--er: 0 72.222% 50.588%}[data-theme=lofi]{color-scheme:light;--pf: 0 0% 4.0784%;--sf: 0 1.9608% 8%;--af: 0 0% 11.922%;--nf: 0 0% 0%;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--p: 0 0% 5.098%;--pc: 0 0% 100%;--s: 0 1.9608% 10%;--sc: 0 0% 100%;--a: 0 0% 14.902%;--ac: 0 0% 100%;--n: 0 0% 0%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 94.902%;--b3: 0 1.9608% 90%;--bc: 0 0% 0%;--in: 212.35 100% 47.647%;--inc: 0 0% 100%;--su: 136.84 72.152% 46.471%;--suc: 0 0% 100%;--wa: 4.5614 100% 66.471%;--wac: 0 0% 100%;--er: 325.05 77.6% 49.02%;--erc: 0 0% 100%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1;--tab-radius: 0}[data-theme=pastel]{color-scheme:light;--pf: 283.64 21.569% 64%;--sf: 351.63 70.492% 70.431%;--af: 158.49 54.639% 64.784%;--nf: 198.62 43.719% 48.784%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 0% 20%;--pc: 283.64 59.314% 16%;--sc: 351.63 100% 17.608%;--ac: 158.49 100% 16.196%;--nc: 198.62 100% 12.196%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 283.64 21.569% 80%;--s: 351.63 70.492% 88.039%;--a: 158.49 54.639% 80.98%;--n: 198.62 43.719% 60.98%;--b1: 0 0% 100%;--b2: 210 20% 98.039%;--b3: 216 12.195% 83.922%;--rounded-btn: 1.9rem}[data-theme=fantasy]{color-scheme:light;--pf: 296.04 82.813% 20.078%;--sf: 200 100% 29.647%;--af: 30.894 94.378% 40.941%;--nf: 215 27.907% 13.49%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 296.04 100% 85.02%;--sc: 200 100% 87.412%;--ac: 30.894 100% 10.235%;--nc: 215 62.264% 83.373%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 296.04 82.813% 25.098%;--s: 200 100% 37.059%;--a: 30.894 94.378% 51.176%;--n: 215 27.907% 16.863%;--b1: 0 0% 100%;--bc: 215 27.907% 16.863%}[data-theme=wireframe]{color-scheme:light;--pf: 0 0% 57.725%;--sf: 0 0% 57.725%;--af: 0 0% 57.725%;--nf: 0 0% 73.725%;--bc: 0 0% 20%;--pc: 0 0% 14.431%;--sc: 0 0% 14.431%;--ac: 0 0% 14.431%;--nc: 0 0% 18.431%;--inc: 240 100% 90%;--suc: 120 100% 85.02%;--wac: 60 100% 10%;--erc: 0 100% 90%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;font-family:Chalkboard,comic sans ms,sanssecondaryerif;--p: 0 0% 72.157%;--s: 0 0% 72.157%;--a: 0 0% 72.157%;--n: 0 0% 92.157%;--b1: 0 0% 100%;--b2: 0 0% 93.333%;--b3: 0 0% 86.667%;--in: 240 100% 50%;--su: 120 100% 25.098%;--wa: 60 30.196% 50%;--er: 0 100% 50%;--rounded-box: .2rem;--rounded-btn: .2rem;--rounded-badge: .2rem;--tab-radius: .2rem}[data-theme=black]{color-scheme:dark;--pf: 0 1.9608% 16%;--sf: 0 1.9608% 16%;--af: 0 1.9608% 16%;--bc: 0 0% 80%;--pc: 0 5.3922% 84%;--sc: 0 5.3922% 84%;--ac: 0 5.3922% 84%;--nc: 0 2.5404% 83.02%;--inc: 240 100% 90%;--suc: 120 100% 85.02%;--wac: 60 100% 10%;--erc: 0 100% 90%;--border-btn: 1px;--tab-border: 1px;--p: 0 1.9608% 20%;--s: 0 1.9608% 20%;--a: 0 1.9608% 20%;--b1: 0 0% 0%;--b2: 0 0% 5.098%;--b3: 0 1.9608% 10%;--n: 0 1.2987% 15.098%;--nf: 0 1.9608% 20%;--in: 240 100% 50%;--su: 120 100% 25.098%;--wa: 60 100% 50%;--er: 0 100% 50%;--rounded-box: 0;--rounded-btn: 0;--rounded-badge: 0;--animation-btn: 0;--animation-input: 0;--btn-text-case: lowercase;--btn-focus-scale: 1;--tab-radius: 0}[data-theme=luxury]{color-scheme:dark;--pf: 0 0% 80%;--sf: 218.4 54.348% 14.431%;--af: 318.62 21.805% 20.863%;--nf: 270 4.3478% 7.2157%;--pc: 0 0% 20%;--sc: 218.4 100% 83.608%;--ac: 318.62 84.615% 85.216%;--inc: 202.35 100% 14%;--suc: 89.007 100% 10.392%;--wac: 53.906 100% 12.706%;--erc: 0 100% 14.353%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 0 0% 100%;--s: 218.4 54.348% 18.039%;--a: 318.62 21.805% 26.078%;--n: 270 4.3478% 9.0196%;--nc: 37.083 67.29% 58.039%;--b1: 240 10% 3.9216%;--b2: 270 4.3478% 9.0196%;--b3: 270 2.1739% 18.039%;--bc: 37.083 67.29% 58.039%;--in: 202.35 100% 70%;--su: 89.007 61.633% 51.961%;--wa: 53.906 68.817% 63.529%;--er: 0 100% 71.765%}[data-theme=dracula]{color-scheme:dark;--pf: 325.52 100% 58.98%;--sf: 264.71 89.474% 62.118%;--af: 31.02 100% 56.941%;--nf: 229.57 15.033% 24%;--b2: 231.43 14.894% 16.588%;--b3: 231.43 14.894% 14.929%;--pc: 325.52 100% 14.745%;--sc: 264.71 100% 15.529%;--ac: 31.02 100% 14.235%;--nc: 229.57 70.868% 86%;--inc: 190.53 100% 15.373%;--suc: 135.18 100% 12.941%;--wac: 64.909 100% 15.294%;--erc: 0 100% 93.333%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 325.52 100% 73.725%;--s: 264.71 89.474% 77.647%;--a: 31.02 100% 71.176%;--n: 229.57 15.033% 30%;--b1: 231.43 14.894% 18.431%;--bc: 60 30% 96.078%;--in: 190.53 96.61% 76.863%;--su: 135.18 94.444% 64.706%;--wa: 64.909 91.667% 76.471%;--er: 0 100% 66.667%}[data-theme=cmyk]{color-scheme:light;--pf: 202.72 83.251% 48.157%;--sf: 335.25 77.67% 47.686%;--af: 56.195 100% 47.843%;--nf: 0 0% 8.1569%;--b2: 0 0% 90%;--b3: 0 0% 81%;--bc: 0 0% 20%;--pc: 202.72 100% 12.039%;--sc: 335.25 100% 91.922%;--ac: 56.195 100% 11.961%;--nc: 0 0% 82.039%;--inc: 192.2 100% 10.431%;--suc: 291.06 100% 87.608%;--wac: 25.027 100% 11.333%;--erc: 3.956 100% 91.137%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 202.72 83.251% 60.196%;--s: 335.25 77.67% 59.608%;--a: 56.195 100% 59.804%;--n: 0 0% 10.196%;--b1: 0 0% 100%;--in: 192.2 48.361% 52.157%;--su: 291.06 48.454% 38.039%;--wa: 25.027 84.615% 56.667%;--er: 3.956 80.531% 55.686%}[data-theme=autumn]{color-scheme:light;--pf: 344.23 95.804% 22.431%;--sf: .44444 63.38% 46.588%;--af: 27.477 56.021% 50.039%;--nf: 22.105 17.117% 34.824%;--b2: 0 0% 85.059%;--b3: 0 0% 76.553%;--bc: 0 0% 18.902%;--pc: 344.23 100% 85.608%;--sc: .44444 100% 91.647%;--ac: 27.477 100% 12.51%;--nc: 22.105 100% 88.706%;--inc: 186.94 100% 9.9216%;--suc: 164.59 100% 8.6275%;--wac: 30.141 100% 9.9216%;--erc: 353.6 100% 89.765%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 344.23 95.804% 28.039%;--s: .44444 63.38% 58.235%;--a: 27.477 56.021% 62.549%;--n: 22.105 17.117% 43.529%;--b1: 0 0% 94.51%;--in: 186.94 47.826% 49.608%;--su: 164.59 33.636% 43.137%;--wa: 30.141 84.19% 49.608%;--er: 353.6 79.116% 48.824%}[data-theme=business]{color-scheme:dark;--pf: 210 64.103% 24.471%;--sf: 200 12.931% 43.608%;--af: 12.515 79.512% 47.843%;--nf: 212.73 13.58% 12.706%;--b2: 0 0% 11.294%;--b3: 0 0% 10.165%;--bc: 0 0% 82.51%;--pc: 210 100% 86.118%;--sc: 200 100% 10.902%;--ac: 12.515 100% 11.961%;--nc: 212.73 28.205% 83.176%;--inc: 199.15 100% 88.353%;--suc: 144 100% 11.137%;--wac: 39.231 100% 12.078%;--erc: 6.3415 100% 88.667%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 210 64.103% 30.588%;--s: 200 12.931% 54.51%;--a: 12.515 79.512% 59.804%;--n: 212.73 13.58% 15.882%;--b1: 0 0% 12.549%;--in: 199.15 100% 41.765%;--su: 144 30.973% 55.686%;--wa: 39.231 64.356% 60.392%;--er: 6.3415 55.656% 43.333%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem}[data-theme=acid]{color-scheme:light;--pf: 302.59 100% 40%;--sf: 27.294 100% 40%;--af: 72 98.425% 40.157%;--nf: 238.42 43.182% 13.804%;--b2: 0 0% 88.235%;--b3: 0 0% 79.412%;--bc: 0 0% 19.608%;--pc: 302.59 100% 90%;--sc: 27.294 100% 10%;--ac: 72 100% 10.039%;--nc: 238.42 99.052% 83.451%;--inc: 209.85 100% 11.569%;--suc: 148.87 100% 11.608%;--wac: 52.574 100% 11.451%;--erc: .78261 100% 89.02%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 302.59 100% 50%;--s: 27.294 100% 50%;--a: 72 98.425% 50.196%;--n: 238.42 43.182% 17.255%;--b1: 0 0% 98.039%;--in: 209.85 91.628% 57.843%;--su: 148.87 49.533% 58.039%;--wa: 52.574 92.661% 57.255%;--er: .78261 100% 45.098%;--rounded-box: 1.25rem;--rounded-btn: 1rem;--rounded-badge: 1rem}[data-theme=lemonade]{color-scheme:light;--pf: 88.8 96.154% 24.471%;--sf: 60 80.952% 43.765%;--af: 62.553 79.661% 70.745%;--nf: 238.42 43.182% 13.804%;--b2: 0 0% 90%;--b3: 0 0% 81%;--bc: 0 0% 20%;--pc: 88.8 100% 86.118%;--sc: 60 100% 10.941%;--ac: 62.553 100% 17.686%;--nc: 238.42 99.052% 83.451%;--inc: 191.61 79.118% 16.902%;--suc: 74.458 100% 15.725%;--wac: 50.182 100% 15.059%;--erc: .98361 100% 16.588%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 88.8 96.154% 30.588%;--s: 60 80.952% 54.706%;--a: 62.553 79.661% 88.431%;--n: 238.42 43.182% 17.255%;--b1: 0 0% 100%;--in: 191.61 39.241% 84.51%;--su: 74.458 76.147% 78.627%;--wa: 50.182 87.302% 75.294%;--er: .98361 70.115% 82.941%}[data-theme=night]{color-scheme:dark;--pf: 198.44 93.204% 47.686%;--sf: 234.45 89.474% 59.137%;--af: 328.85 85.621% 56%;--b2: 222.22 47.368% 10.059%;--b3: 222.22 47.368% 9.0529%;--bc: 222.22 65.563% 82.235%;--pc: 198.44 100% 11.922%;--sc: 234.45 100% 14.784%;--ac: 328.85 100% 14%;--nc: 217.24 75.772% 83.49%;--inc: 198.46 100% 9.6078%;--suc: 172.46 100% 10.078%;--wac: 40.61 100% 12.706%;--erc: 350.94 100% 14.235%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 198.44 93.204% 59.608%;--s: 234.45 89.474% 73.922%;--a: 328.85 85.621% 70%;--n: 217.24 32.584% 17.451%;--nf: 217.06 30.357% 21.961%;--b1: 222.22 47.368% 11.176%;--in: 198.46 90.204% 48.039%;--su: 172.46 66.008% 50.392%;--wa: 40.61 88.172% 63.529%;--er: 350.94 94.558% 71.176%}[data-theme=coffee]{color-scheme:dark;--pf: 29.583 66.667% 46.118%;--sf: 182.4 24.752% 15.843%;--af: 194.19 74.4% 19.608%;--nf: 300 20% 4.7059%;--b2: 306 18.519% 9.5294%;--b3: 306 18.519% 8.5765%;--pc: 29.583 100% 11.529%;--sc: 182.4 67.237% 83.961%;--ac: 194.19 100% 84.902%;--nc: 300 13.75% 81.176%;--inc: 171.15 100% 13.451%;--suc: 92.5 100% 12.471%;--wac: 43.125 100% 13.725%;--erc: 9.7561 100% 14.941%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 29.583 66.667% 57.647%;--s: 182.4 24.752% 19.804%;--a: 194.19 74.4% 24.51%;--n: 300 20% 5.8824%;--b1: 306 18.519% 10.588%;--bc: 36.667 8.3333% 42.353%;--in: 171.15 36.527% 67.255%;--su: 92.5 25% 62.353%;--wa: 43.125 100% 68.627%;--er: 9.7561 95.349% 74.706%}[data-theme=winter]{color-scheme:light;--pf: 211.79 100% 40.627%;--sf: 246.92 47.273% 34.51%;--af: 310.41 49.388% 41.569%;--nf: 217.02 92.157% 8%;--pc: 211.79 100% 90.157%;--sc: 246.92 100% 88.627%;--ac: 310.41 100% 90.392%;--nc: 217.02 100% 82%;--inc: 191.54 100% 15.608%;--suc: 181.5 100% 13.255%;--wac: 32.308 100% 16.706%;--erc: 0 100% 14.431%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 211.79 100% 50.784%;--s: 246.92 47.273% 43.137%;--a: 310.41 49.388% 51.961%;--n: 217.02 92.157% 10%;--b1: 0 0% 100%;--b2: 216.92 100% 97.451%;--b3: 218.82 43.59% 92.353%;--bc: 214.29 30.061% 31.961%;--in: 191.54 92.857% 78.039%;--su: 181.5 46.512% 66.275%;--wa: 32.308 61.905% 83.529%;--er: 0 63.38% 72.157%}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.btn{display:inline-flex;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-color:transparent;border-color:hsl(var(--n) / var(--tw-border-opacity));text-align:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);border-radius:var(--rounded-btn, .5rem);height:3rem;padding-left:1rem;padding-right:1rem;font-size:.875rem;line-height:1.25rem;line-height:1em;min-height:3rem;font-weight:600;text-transform:uppercase;text-transform:var(--btn-text-case, uppercase);text-decoration-line:none;border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;--tw-border-opacity: 1;--tw-bg-opacity: 1;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}.btn-disabled,.btn[disabled],.btn.loading,.btn.loading:hover{pointer-events:none}.btn.loading:before{margin-right:.5rem;height:1rem;width:1rem;border-radius:9999px;border-width:2px;animation:spin 2s linear infinite;content:"";border-top-color:transparent;border-left-color:transparent;border-bottom-color:currentColor;border-right-color:currentColor}@media (prefers-reduced-motion: reduce){.btn.loading:before{animation:spin 10s linear infinite}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn-group>input[type=radio].btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-group>input[type=radio].btn:before{content:attr(data-title)}.checkbox{flex-shrink:0;--chkbg: var(--bc);--chkfg: var(--b1);height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: .2;border-radius:var(--rounded-btn, .5rem)}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding:.5rem .25rem}.input{flex-shrink:1;height:3rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:2;line-height:1.5rem;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: 0;--tw-bg-opacity: 1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));border-radius:var(--rounded-btn, .5rem)}.input-group>.input{isolation:isolate}.input-group>*,.input-group>.input,.input-group>.textarea,.input-group>.select{border-radius:0}.link{cursor:pointer;text-decoration-line:underline}.modal{pointer-events:none;visibility:hidden;position:fixed;inset:0px;display:flex;justify-content:center;opacity:0;z-index:999;background-color:hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));--tw-bg-opacity: .4;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform,opacity,visibility;overflow-y:hidden;overscroll-behavior:contain}:where(.modal){align-items:center}.modal-box{max-height:calc(100vh - 5em);--tw-bg-opacity: 1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));padding:1.5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);width:91.666667%;max-width:32rem;--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-top-left-radius:var(--rounded-box, 1rem);border-top-right-radius:var(--rounded-box, 1rem);border-bottom-left-radius:var(--rounded-box, 1rem);border-bottom-right-radius:var(--rounded-box, 1rem);box-shadow:0 25px 50px -12px #00000040;overflow-y:auto;overscroll-behavior:contain}.modal-open,.modal:target,.modal-toggle:checked+.modal{pointer-events:auto;visibility:visible;opacity:1}.modal-action{display:flex;margin-top:1.5rem;justify-content:flex-end}.modal-toggle{position:fixed;height:0px;width:0px;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0}.btm-nav>* .label{font-size:1rem;line-height:1.5rem}.btn:active:hover,.btn:active:focus{animation:none;transform:scale(var(--btn-focus-scale, .95))}.btn:hover,.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))}.btn:focus-visible{outline:2px solid hsl(var(--nf));outline-offset:2px}.btn.glass:hover,.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn.glass:focus-visible{outline:2px solid currentColor}.btn-disabled,.btn-disabled:hover,.btn[disabled],.btn[disabled]:hover{--tw-border-opacity: 0;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-bg-opacity: .2;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2}.btn.loading.btn-square:before,.btn.loading.btn-circle:before{margin-right:0}.btn.loading.btn-xl:before,.btn.loading.btn-lg:before{height:1.25rem;width:1.25rem}.btn.loading.btn-sm:before,.btn.loading.btn-xs:before{height:.75rem;width:.75rem}.btn-group>input[type=radio]:checked.btn,.btn-group>.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-group>input[type=radio]:checked.btn:focus-visible,.btn-group>.btn-active:focus-visible{outline:2px solid hsl(var(--p))}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .95))}40%{transform:scale(1.02)}to{transform:scale(1)}}.checkbox:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px}.checkbox:checked,.checkbox[checked=true],.checkbox[aria-checked=true]{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-in-out;background-image:linear-gradient(-45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.checkbox:indeterminate{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-in-out;background-image:linear-gradient(90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(-90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(0deg,hsl(var(--chkbg)) 43%,hsl(var(--chkfg)) 43%,hsl(var(--chkfg)) 57%,hsl(var(--chkbg)) 57%)}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));opacity:.2}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}[dir=rtl] .checkbox:checked,[dir=rtl] .checkbox[checked=true],[dir=rtl] .checkbox[aria-checked=true]{background-image:linear-gradient(45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(-45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.label a:hover{--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity))}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input:focus{outline:2px solid hsla(var(--bc) / .2);outline-offset:2px}.input-disabled,.input[disabled]{cursor:not-allowed;--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));--tw-text-opacity: .2}.input-disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2}.input-disabled::placeholder,.input[disabled]::placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.modal-open .modal-box,.modal-toggle:checked+.modal .modal-box,.modal:target .modal-box{--tw-translate-y: 0px;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modal-action>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}@keyframes progress-loading{50%{left:107%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.btn-group .btn:not(:first-child):not(:last-child){border-radius:0}.btn-group .btn:first-child:not(:last-child){margin-top:-0px;margin-left:-1px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:0}.btn-group .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn, .5rem)}.btn-group-horizontal .btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-horizontal .btn:first-child:not(:last-child){margin-top:-0px;margin-left:-1px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:0}.btn-group-horizontal .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn, .5rem)}.btn-group-vertical .btn:first-child:not(:last-child){margin-top:-1px;margin-left:-0px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:var(--rounded-btn, .5rem)}.modal-bottom :where(.modal-box){width:100%;max-width:none;--tw-translate-y: 2.5rem;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-middle :where(.modal-box){width:91.666667%;max-width:32rem;--tw-translate-y: 0px;--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-bottom-left-radius:var(--rounded-box, 1rem);border-bottom-right-radius:var(--rounded-box, 1rem)}.py-4{padding-top:1rem;padding-bottom:1rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-bold{font-weight:700}.text-red-400{--tw-text-opacity: 1;color:rgb(248 113 113 / var(--tw-text-opacity))}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as it, openBlock as ct, createElementBlock as lt, Fragment as at, createElementVNode as Pe, toDisplayString as ut, createStaticVNode as qt } from "vue";
function Gt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function $e(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = I(s) ? Xt(s) : $e(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (I(e))
      return e;
    if (x(e))
      return e;
  }
}
const Lt = /;(?![^(]*\))/g, Yt = /:([^]+)/, Qt = /\/\*.*?\*\//gs;
function Xt(e) {
  const t = {};
  return e.replace(Qt, "").split(Lt).forEach((n) => {
    if (n) {
      const s = n.split(Yt);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Te(e) {
  let t = "";
  if (I(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const s = Te(e[n]);
      s && (t += s + " ");
    }
  else if (x(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const $ = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ft = () => {
}, Zt = () => !1, kt = /^on[^a-z]/, en = (e) => kt.test(e), C = Object.assign, tn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, nn = Object.prototype.hasOwnProperty, g = (e, t) => nn.call(e, t), h = Array.isArray, Y = (e) => me(e) === "[object Map]", rn = (e) => me(e) === "[object Set]", w = (e) => typeof e == "function", I = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", x = (e) => e !== null && typeof e == "object", sn = (e) => x(e) && w(e.then) && w(e.catch), on = Object.prototype.toString, me = (e) => on.call(e), pt = (e) => me(e).slice(8, -1), cn = (e) => me(e) === "[object Object]", Me = (e) => I(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, an = ln((e) => e.charAt(0).toUpperCase() + e.slice(1)), pe = (e, t) => !Object.is(e, t), un = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Je;
const fn = () => Je || (Je = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let dt;
function pn(e, t = dt) {
  t && t.active && t.effects.push(e);
}
function dn() {
  return dt;
}
const Oe = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, ht = (e) => (e.w & A) > 0, _t = (e) => (e.n & A) > 0, hn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= A;
}, _n = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      ht(r) && !_t(r) ? r.delete(e) : t[n++] = r, r.w &= ~A, r.n &= ~A;
    }
    t.length = n;
  }
}, Se = /* @__PURE__ */ new WeakMap();
let Z = 0, A = 1;
const xe = 30;
let O;
const K = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ve = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class gn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, pn(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = O, n = W;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = O, O = this, W = !0, A = 1 << ++Z, Z <= xe ? hn(this) : Ge(this), this.fn();
    } finally {
      Z <= xe && _n(this), A = 1 << --Z, O = this.parent, W = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    O === this ? this.deferStop = !0 : this.active && (Ge(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ge(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let W = !0;
const gt = [];
function mt() {
  gt.push(W), W = !1;
}
function Et() {
  const e = gt.pop();
  W = e === void 0 ? !0 : e;
}
function v(e, t, n) {
  if (W && O) {
    let s = Se.get(e);
    s || Se.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Oe());
    const o = process.env.NODE_ENV !== "production" ? { effect: O, target: e, type: t, key: n } : void 0;
    mn(r, o);
  }
}
function mn(e, t) {
  let n = !1;
  Z <= xe ? _t(e) || (e.n |= A, n = !ht(e)) : n = !e.has(O), n && (e.add(O), O.deps.push(e), process.env.NODE_ENV !== "production" && O.onTrack && O.onTrack(Object.assign({ effect: O }, t)));
}
function H(e, t, n, s, r, o) {
  const i = Se.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const f = Number(s);
    i.forEach((d, l) => {
      (l === "length" || l >= f) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? Me(n) && c.push(i.get("length")) : (c.push(i.get(K)), Y(e) && c.push(i.get(Ve)));
        break;
      case "delete":
        h(e) || (c.push(i.get(K)), Y(e) && c.push(i.get(Ve)));
        break;
      case "set":
        Y(e) && c.push(i.get(K));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: s, oldValue: r, oldTarget: o } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? re(c[0], a) : re(c[0]));
  else {
    const f = [];
    for (const d of c)
      d && f.push(...d);
    process.env.NODE_ENV !== "production" ? re(Oe(f), a) : re(Oe(f));
  }
}
function re(e, t) {
  const n = h(e) ? e : [...e];
  for (const s of n)
    s.computed && Le(s, t);
  for (const s of n)
    s.computed || Le(s, t);
}
function Le(e, t) {
  (e !== O || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(C({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const En = /* @__PURE__ */ Gt("__proto__,__v_isRef,__isVue"), wt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
), wn = /* @__PURE__ */ Fe(), Nn = /* @__PURE__ */ Fe(!0), bn = /* @__PURE__ */ Fe(!0, !0), Ye = /* @__PURE__ */ On();
function On() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = p(this);
      for (let o = 0, i = this.length; o < i; o++)
        v(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(p)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      mt();
      const s = p(this)[t].apply(this, n);
      return Et(), s;
    };
  }), e;
}
function Sn(e) {
  const t = p(this);
  return v(t, "has", e), t.hasOwnProperty(e);
}
function Fe(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? xt : St : t ? Hn : Ot).get(s))
      return s;
    const i = h(s);
    if (!e) {
      if (i && g(Ye, r))
        return Reflect.get(Ye, r, o);
      if (r === "hasOwnProperty")
        return Sn;
    }
    const c = Reflect.get(s, r, o);
    return (Re(r) ? wt.has(r) : En(r)) || (e || v(s, "get", r), t) ? c : S(c) ? i && Me(r) ? c : c.value : x(c) ? e ? vt(c) : Vt(c) : c;
  };
}
const xn = /* @__PURE__ */ Vn();
function Vn(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (q(i) && S(i) && !S(r))
      return !1;
    if (!e && (!ve(r) && !q(r) && (i = p(i), r = p(r)), !h(n) && S(i) && !S(r)))
      return i.value = r, !0;
    const c = h(n) && Me(s) ? Number(s) < n.length : g(n, s), a = Reflect.set(n, s, r, o);
    return n === p(o) && (c ? pe(r, i) && H(n, "set", s, r, i) : H(n, "add", s, r)), a;
  };
}
function vn(e, t) {
  const n = g(e, t), s = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && H(e, "delete", t, void 0, s), r;
}
function yn(e, t) {
  const n = Reflect.has(e, t);
  return (!Re(t) || !wt.has(t)) && v(e, "has", t), n;
}
function Dn(e) {
  return v(e, "iterate", h(e) ? "length" : K), Reflect.ownKeys(e);
}
const Cn = {
  get: wn,
  set: xn,
  deleteProperty: vn,
  has: yn,
  ownKeys: Dn
}, Nt = {
  get: Nn,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && qe(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && qe(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, In = /* @__PURE__ */ C({}, Nt, {
  get: bn
}), je = (e) => e, Ee = (e) => Reflect.getPrototypeOf(e);
function se(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = p(e), o = p(t);
  n || (t !== o && v(r, "get", t), v(r, "get", o));
  const { has: i } = Ee(r), c = s ? je : n ? Ke : ze;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function oe(e, t = !1) {
  const n = this.__v_raw, s = p(n), r = p(e);
  return t || (e !== r && v(s, "has", e), v(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function ie(e, t = !1) {
  return e = e.__v_raw, !t && v(p(e), "iterate", K), Reflect.get(e, "size", e);
}
function Qe(e) {
  e = p(e);
  const t = p(this);
  return Ee(t).has.call(t, e) || (t.add(e), H(t, "add", e, e)), this;
}
function Xe(e, t) {
  t = p(t);
  const n = p(this), { has: s, get: r } = Ee(n);
  let o = s.call(n, e);
  o ? process.env.NODE_ENV !== "production" && bt(n, s, e) : (e = p(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? pe(t, i) && H(n, "set", e, t, i) : H(n, "add", e, t), this;
}
function Ze(e) {
  const t = p(this), { has: n, get: s } = Ee(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && bt(t, n, e) : (e = p(e), r = n.call(t, e));
  const o = s ? s.call(t, e) : void 0, i = t.delete(e);
  return r && H(t, "delete", e, void 0, o), i;
}
function ke() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Y(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && H(e, "clear", void 0, void 0, n), s;
}
function ce(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = p(i), a = t ? je : e ? Ke : ze;
    return !e && v(c, "iterate", K), i.forEach((f, d) => s.call(r, a(f), a(d), o));
  };
}
function le(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = p(r), i = Y(o), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = r[e](...s), d = n ? je : t ? Ke : ze;
    return !t && v(o, "iterate", a ? Ve : K), {
      // iterator protocol
      next() {
        const { value: l, done: u } = f.next();
        return u ? { value: l, done: u } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function R(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${an(e)} operation ${n}failed: target is readonly.`, p(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Pn() {
  const e = {
    get(o) {
      return se(this, o);
    },
    get size() {
      return ie(this);
    },
    has: oe,
    add: Qe,
    set: Xe,
    delete: Ze,
    clear: ke,
    forEach: ce(!1, !1)
  }, t = {
    get(o) {
      return se(this, o, !1, !0);
    },
    get size() {
      return ie(this);
    },
    has: oe,
    add: Qe,
    set: Xe,
    delete: Ze,
    clear: ke,
    forEach: ce(!1, !0)
  }, n = {
    get(o) {
      return se(this, o, !0);
    },
    get size() {
      return ie(this, !0);
    },
    has(o) {
      return oe.call(this, o, !0);
    },
    add: R(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: R(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: R(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: R(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: ce(!0, !1)
  }, s = {
    get(o) {
      return se(this, o, !0, !0);
    },
    get size() {
      return ie(this, !0);
    },
    has(o) {
      return oe.call(this, o, !0);
    },
    add: R(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: R(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: R(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: R(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: ce(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = le(o, !1, !1), n[o] = le(o, !0, !1), t[o] = le(o, !1, !0), s[o] = le(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [$n, Tn, Rn, Mn] = /* @__PURE__ */ Pn();
function Ae(e, t) {
  const n = t ? e ? Mn : Rn : e ? Tn : $n;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(g(n, r) && r in s ? n : s, r, o);
}
const Fn = {
  get: /* @__PURE__ */ Ae(!1, !1)
}, jn = {
  get: /* @__PURE__ */ Ae(!0, !1)
}, An = {
  get: /* @__PURE__ */ Ae(!0, !0)
};
function bt(e, t, n) {
  const s = p(n);
  if (s !== n && t.call(e, s)) {
    const r = pt(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Ot = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap();
function zn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Kn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zn(pt(e));
}
function Vt(e) {
  return q(e) ? e : He(e, !1, Cn, Fn, Ot);
}
function vt(e) {
  return He(e, !0, Nt, jn, St);
}
function ae(e) {
  return He(e, !0, In, An, xt);
}
function He(e, t, n, s, r) {
  if (!x(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = Kn(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? s : n);
  return r.set(e, c), c;
}
function U(e) {
  return q(e) ? U(e.__v_raw) : !!(e && e.__v_isReactive);
}
function q(e) {
  return !!(e && e.__v_isReadonly);
}
function ve(e) {
  return !!(e && e.__v_isShallow);
}
function ye(e) {
  return U(e) || q(e);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Wn(e) {
  return un(e, "__v_skip", !0), e;
}
const ze = (e) => x(e) ? Vt(e) : e, Ke = (e) => x(e) ? vt(e) : e;
function S(e) {
  return !!(e && e.__v_isRef === !0);
}
function Un(e) {
  return S(e) ? e.value : e;
}
const Bn = {
  get: (e, t, n) => Un(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return S(r) && !S(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Jn(e) {
  return U(e) ? e : new Proxy(e, Bn);
}
const B = [];
function qn(e) {
  B.push(e);
}
function Gn() {
  B.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  mt();
  const n = B.length ? B[B.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Ln();
  if (s)
    J(s, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: o }) => `at <${Kt(n, o.type)}>`).join(`
`),
      r
    ]);
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Yn(r)), console.warn(...o);
  }
  Et();
}
function Ln() {
  let e = B[B.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Yn(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Qn(n));
  }), t;
}
function Qn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Kt(e.component, e.type, s)}`, o = ">" + n;
  return e.props ? [r, ...Xn(e.props), o] : [r + o];
}
function Xn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...yt(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function yt(e, t, n) {
  return I(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : S(t) ? (t = yt(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : w(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Dt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function J(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Ct(o, t, n);
  }
  return r;
}
function De(e, t, n, s) {
  if (w(e)) {
    const o = J(e, t, n, s);
    return o && sn(o) && o.catch((i) => {
      Ct(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(De(e[o], t, n, s));
  return r;
}
function Ct(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Dt[n] : n;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let d = 0; d < f.length; d++)
          if (f[d](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      J(a, null, 10, [e, i, c]);
      return;
    }
  }
  Zn(e, n, r, s);
}
function Zn(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Dt[t];
    if (n && qn(n), b(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Gn(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let de = !1, Ce = !1;
const D = [];
let F = 0;
const Q = [];
let P = null, M = 0;
const It = /* @__PURE__ */ Promise.resolve();
let We = null;
const kn = 100;
function er(e) {
  const t = We || It;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tr(e) {
  let t = F + 1, n = D.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    te(D[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Ue(e) {
  (!D.length || !D.includes(e, de && e.allowRecurse ? F + 1 : F)) && (e.id == null ? D.push(e) : D.splice(tr(e.id), 0, e), Pt());
}
function Pt() {
  !de && !Ce && (Ce = !0, We = It.then(Tt));
}
function $t(e) {
  h(e) ? Q.push(...e) : (!P || !P.includes(e, e.allowRecurse ? M + 1 : M)) && Q.push(e), Pt();
}
function nr(e) {
  if (Q.length) {
    const t = [...new Set(Q)];
    if (Q.length = 0, P) {
      P.push(...t);
      return;
    }
    for (P = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort((n, s) => te(n) - te(s)), M = 0; M < P.length; M++)
      process.env.NODE_ENV !== "production" && Rt(e, P[M]) || P[M]();
    P = null, M = 0;
  }
}
const te = (e) => e.id == null ? 1 / 0 : e.id, rr = (e, t) => {
  const n = te(e) - te(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Tt(e) {
  Ce = !1, de = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), D.sort(rr);
  const t = process.env.NODE_ENV !== "production" ? (n) => Rt(e, n) : ft;
  try {
    for (F = 0; F < D.length; F++) {
      const n = D[F];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        J(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    F = 0, D.length = 0, nr(e), de = !1, We = null, (D.length || Q.length) && Tt(e);
  }
}
function Rt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > kn) {
      const s = t.ownerInstance, r = s && zt(s.type);
      return b(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
const X = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (fn().__VUE_HMR_RUNTIME__ = {
  createRecord: we(sr),
  rerender: we(or),
  reload: we(ir)
});
const he = /* @__PURE__ */ new Map();
function sr(e, t) {
  return he.has(e) ? !1 : (he.set(e, {
    initialDef: k(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function k(e) {
  return Wt(e) ? e.__vccOpts : e;
}
function or(e, t) {
  const n = he.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, k(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function ir(e, t) {
  const n = he.get(e);
  if (!n)
    return;
  t = k(t), et(n.initialDef, t);
  const s = [...n.instances];
  for (const r of s) {
    const o = k(r.type);
    X.has(o) || (o !== n.initialDef && et(o, t), X.add(o)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (X.add(o), r.ceReload(t.styles), X.delete(o)) : r.parent ? Ue(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  $t(() => {
    for (const r of s)
      X.delete(k(r.type));
  });
}
function et(e, t) {
  C(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function we(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let j = null, cr = null;
const lr = (e) => e.__isSuspense;
function ar(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : $t(e);
}
const ue = {};
function ur(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = $) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), s !== void 0 && b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (_) => {
    b("Invalid watch source: ", _, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = dn() === (T == null ? void 0 : T.scope) ? T : null;
  let f, d = !1, l = !1;
  if (S(e) ? (f = () => e.value, d = ve(e)) : U(e) ? (f = () => e, s = !0) : h(e) ? (l = !0, d = e.some((_) => U(_) || ve(_)), f = () => e.map((_) => {
    if (S(_))
      return _.value;
    if (U(_))
      return G(_);
    if (w(_))
      return J(
        _,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && c(_);
  })) : w(e) ? t ? f = () => J(
    e,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : f = () => {
    if (!(a && a.isUnmounted))
      return u && u(), De(e, a, 3, [m]);
  } : (f = ft, process.env.NODE_ENV !== "production" && c(e)), t && s) {
    const _ = f;
    f = () => G(_());
  }
  let u, m = (_) => {
    u = y.onStop = () => {
      J(
        _,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, E = l ? new Array(e.length).fill(ue) : ue;
  const V = () => {
    if (y.active)
      if (t) {
        const _ = y.run();
        (s || d || (l ? _.some((Bt, Jt) => pe(Bt, E[Jt])) : pe(_, E))) && (u && u(), De(t, a, 3, [
          _,
          // pass undefined as the old value when it's changed for the first time
          E === ue ? void 0 : l && E[0] === ue ? [] : E,
          m
        ]), E = _);
      } else
        y.run();
  };
  V.allowRecurse = !!t;
  let ne;
  r === "sync" ? ne = V : r === "post" ? ne = () => rt(V, a && a.suspense) : (V.pre = !0, a && (V.id = a.uid), ne = () => Ue(V));
  const y = new gn(f, ne);
  return process.env.NODE_ENV !== "production" && (y.onTrack = o, y.onTrigger = i), t ? n ? V() : E = y.run() : r === "post" ? rt(y.run.bind(y), a && a.suspense) : y.run(), () => {
    y.stop(), a && a.scope && tn(a.scope.effects, y);
  };
}
function fr(e, t, n) {
  const s = this.proxy, r = I(e) ? e.includes(".") ? pr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  w(t) ? o = t : (o = t.handler, n = t);
  const i = T;
  st(this);
  const c = ur(r, o.bind(s), n);
  return i ? st(i) : $r(), c;
}
function pr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function G(e, t) {
  if (!x(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), S(e))
    G(e.value, t);
  else if (h(e))
    for (let n = 0; n < e.length; n++)
      G(e[n], t);
  else if (rn(e) || Y(e))
    e.forEach((n) => {
      G(n, t);
    });
  else if (cn(e))
    for (const n in e)
      G(e[n], t);
  return e;
}
function dr(e) {
  return w(e) ? { setup: e, name: e.name } : e;
}
const hr = Symbol(), Ie = (e) => e ? Tr(e) ? Rr(e) || e.proxy : Ie(e.parent) : null, ee = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ C(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? ae(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? ae(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? ae(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? ae(e.refs) : e.refs,
    $parent: (e) => Ie(e.parent),
    $root: (e) => Ie(e.root),
    $emit: (e) => e.emit,
    $options: (e) => mr(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ue(e.update)),
    $nextTick: (e) => e.n || (e.n = er.bind(e.proxy)),
    $watch: (e) => fr.bind(e)
  })
), _r = (e) => e === "_" || e === "$", Ne = (e, t) => e !== $ && !e.__isScriptSetup && g(e, t), gr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Ne(s, t))
          return i[t] = 1, s[t];
        if (r !== $ && g(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && g(f, t)
        )
          return i[t] = 3, o[t];
        if (n !== $ && g(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = ee[t];
    let l, u;
    if (d)
      return t === "$attrs" && (v(e, "get", t), process.env.NODE_ENV !== "production" && void 0), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== $ && g(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      u = a.config.globalProperties, g(u, t)
    )
      return u[t];
    process.env.NODE_ENV !== "production" && j && (!I(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== $ && _r(t[0]) && g(r, t) ? b(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === j && b(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Ne(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && g(r, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== $ && g(s, t) ? (s[t] = n, !0) : g(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, i) {
    let c;
    return !!n[i] || e !== $ && g(e, i) || Ne(t, i) || (c = o[0]) && g(c, i) || g(s, i) || g(ee, i) || g(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : g(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (gr.ownKeys = (e) => (b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function mr(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, c = o.get(t);
  let a;
  return c ? a = c : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach((f) => _e(a, f, i, !0)), _e(a, t, i)), x(t) && o.set(t, a), a;
}
function _e(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && _e(e, o, n, !0), r && r.forEach((i) => _e(e, i, n, !0));
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = Er[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Er = {
  data: tt,
  props: z,
  emits: z,
  // objects
  methods: z,
  computed: z,
  // lifecycle
  beforeCreate: N,
  created: N,
  beforeMount: N,
  mounted: N,
  beforeUpdate: N,
  updated: N,
  beforeDestroy: N,
  beforeUnmount: N,
  destroyed: N,
  unmounted: N,
  activated: N,
  deactivated: N,
  errorCaptured: N,
  serverPrefetch: N,
  // assets
  components: z,
  directives: z,
  // watch
  watch: Nr,
  // provide / inject
  provide: tt,
  inject: wr
};
function tt(e, t) {
  return t ? e ? function() {
    return C(w(e) ? e.call(this, this) : e, w(t) ? t.call(this, this) : t);
  } : t : e;
}
function wr(e, t) {
  return z(nt(e), nt(t));
}
function nt(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function N(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function z(e, t) {
  return e ? C(C(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Nr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = C(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = N(e[s], t[s]);
  return n;
}
function br() {
  return {
    app: null,
    config: {
      isNativeTag: Zt,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
const rt = ar, Or = (e) => e.__isTeleport, Mt = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Sr = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), xr = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
let L = null;
function Vr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const vr = (...e) => At(...e), Ft = "__vInternal", jt = ({ key: e }) => e ?? null, fe = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? I(e) || S(e) || w(e) ? { i: j, r: e, k: t, f: !!n } : e : null;
function yr(e, t = null, n = null, s = 0, r = null, o = e === Mt ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && jt(t),
    ref: t && fe(t),
    scopeId: cr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: j
  };
  return c ? (Be(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= I(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && b("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  L && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && L.push(a), a;
}
const Dr = process.env.NODE_ENV !== "production" ? vr : At;
function At(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === hr) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = xr), Vr(e)) {
    const c = ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Be(c, n), !o && L && (c.shapeFlag & 6 ? L[L.indexOf(e)] = c : L.push(c)), c.patchFlag |= -2, c;
  }
  if (Wt(e) && (e = e.__vccOpts), t) {
    t = Cr(t);
    let { class: c, style: a } = t;
    c && !I(c) && (t.class = Te(c)), x(a) && (ye(a) && !h(a) && (a = C({}, a)), t.style = $e(a));
  }
  const i = I(e) ? 1 : lr(e) ? 128 : Or(e) ? 64 : x(e) ? 4 : w(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ye(e) && (e = p(e), b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), yr(e, t, n, s, r, i, o, !0);
}
function Cr(e) {
  return e ? ye(e) || Ft in e ? C({}, e) : e : null;
}
function ge(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, c = t ? Pr(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && jt(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? h(r) ? r.concat(fe(t)) : [r, fe(t)] : fe(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && h(i) ? i.map(Ht) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Mt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ge(e.ssContent),
    ssFallback: e.ssFallback && ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ht(e) {
  const t = ge(e);
  return h(e.children) && (t.children = e.children.map(Ht)), t;
}
function Ir(e = " ", t = 0) {
  return Dr(Sr, null, e, t);
}
function Be(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Be(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Ft in t) ? t._ctx = j : r === 3 && j && (j.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    w(t) ? (t = { default: t, _ctx: j }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ir(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Te([t.class, s.class]));
      else if (r === "style")
        t.style = $e([t.style, s.style]);
      else if (en(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(h(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
br();
let T = null;
const st = (e) => {
  T = e, e.scope.on();
}, $r = () => {
  T && T.scope.off(), T = null;
};
function Tr(e) {
  return e.vnode.shapeFlag & 4;
}
function Rr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Jn(Wn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ee)
          return ee[n](e);
      },
      has(t, n) {
        return n in t || n in ee;
      }
    }));
}
const Mr = /(?:^|[-_])(\w)/g, Fr = (e) => e.replace(Mr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function zt(e, t = !0) {
  return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Kt(e, t, n = !1) {
  let s = zt(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return s ? Fr(s) : n ? "App" : "Anonymous";
}
function Wt(e) {
  return w(e) && "__vccOpts" in e;
}
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function be(e) {
  return !!(e && e.__v_isShallow);
}
function jr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, s = { style: "color:#9d288c" }, r = {
    header(l) {
      return x(l) ? l.__isVue ? ["div", e, "VueInstance"] : S(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        c(l.value),
        ">"
      ] : U(l) ? [
        "div",
        {},
        ["span", e, be(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${q(l) ? " (readonly)" : ""}`
      ] : q(l) ? [
        "div",
        {},
        ["span", e, be(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const u = [];
    l.type.props && l.props && u.push(i("props", p(l.props))), l.setupState !== $ && u.push(i("setup", l.setupState)), l.data !== $ && u.push(i("data", p(l.data)));
    const m = a(l, "computed");
    m && u.push(i("computed", m));
    const E = a(l, "inject");
    return E && u.push(i("injected", E)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), u;
  }
  function i(l, u) {
    return u = C({}, u), Object.keys(u).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(u).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          c(u[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, u = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", s, l] : x(l) ? ["object", { object: u ? p(l) : l }] : ["span", n, String(l)];
  }
  function a(l, u) {
    const m = l.type;
    if (w(m))
      return;
    const E = {};
    for (const V in l.ctx)
      f(m, V, u) && (E[V] = l.ctx[V]);
    return E;
  }
  function f(l, u, m) {
    const E = l[m];
    if (h(E) && E.includes(u) || x(E) && u in E || l.extends && f(l.extends, u, m) || l.mixins && l.mixins.some((V) => f(V, u, m)))
      return !0;
  }
  function d(l) {
    return be(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function Ar() {
  jr();
}
process.env.NODE_ENV !== "production" && Ar();
const Hr = { class: "font-bold text-red-400 text-4xl" }, zr = /* @__PURE__ */ qt('<div><button class="btn">Button</button></div><div><label for="my-modal" class="btn">open modal</label><input type="checkbox" id="my-modal" class="modal-toggle"><div class="modal"><div class="modal-box"><h3 class="font-bold text-lg">Congratulations random Internet user!</h3><p class="py-4"> You&#39;ve been selected for a chance to get one year of subscription to use Wikipedia for free! </p><div class="modal-action"><label for="my-modal" class="btn">Yay!</label></div></div></div></div>', 2), Kr = () => ({
  msg: "This is Test cpp"
}), Wr = dr({
  name: "HelloPing",
  prop: Kr()
  // setup(props, { slots, emit, expose }) {},
}), Ur = /* @__PURE__ */ it({
  ...Wr,
  props: {
    msg: String
  },
  setup(e) {
    return (t, n) => (ct(), lt(at, null, [
      Pe("div", Hr, "Hello Ping " + ut(e.msg), 1),
      zr
    ], 64));
  }
}), Ut = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
}, Br = Ut(Ur), Jr = { class: "font-bold text-red-400 text-4xl" }, qr = /* @__PURE__ */ Pe("div", null, "This is CPP", -1), Gr = {
  name: "TestCpp"
}, Lr = /* @__PURE__ */ it({
  ...Gr,
  props: {
    msg: String
  },
  setup(e) {
    return (t, n) => (ct(), lt(at, null, [
      Pe("div", Jr, "Hello Ping " + ut(e.msg), 1),
      qr
    ], 64));
  }
}), Yr = Ut(Lr), ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HelloPing: Br,
  TestCpp: Yr
}, Symbol.toStringTag, { value: "Module" })), Zr = {
  version: "0.0.21",
  name: "PingWidget",
  install: (e) => (Object.keys(ot).map((t) => {
    const n = ot[t];
    n.install && e.use(n);
  }), e)
};
export {
  Br as HelloPing,
  Yr as TestCpp,
  Zr as default
};
