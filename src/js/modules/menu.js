import {bodyLock} from "../base/index.js";
import '@scss/modules/menu.scss';
import {actionDelay, isStr} from "../base/checkFunctions.js";
import {FOOTER, PAGE} from "../const.js";
export class Menu {
    constructor(name, icon, nav, lock = true) {
        this.moduleName = `[menu ${name}]`
        this.options = {
            condition: (icon, nav) => {
                if ((name && icon && nav) && isStr(name) && icon.tagName && nav.tagName) return true
                else return false
            },
            messanges: {
                noCondition:`[${this.moduleName}] not pass the condition`,
            }
        }
        this.status = false
        this.inited = false
        this.icon = icon
        this.nav = nav
        this.lock = lock
    }
    open() {
        if (this.options.condition(this.icon, this.nav)) {
            this.status = true;
            this.icon.classList.add('active')
            this.nav.classList.add('opened')
            if (PAGE ) {
                PAGE.inert = true
            }
            if (FOOTER){
                FOOTER.inert = true
            }
            bodyLock.add()
            console.log(`${this.moduleName} opened`);
        }else console.log(`${this.options.messanges.noCondition}`)
    }
    close() {
        if (this.options.condition(this.icon, this.nav)) {
            this.status = false;
            this.icon.classList.remove('active')
            this.nav.classList.remove('opened')
            if (PAGE ) {
                PAGE.inert = false
            }
            if (FOOTER){
                FOOTER.inert = false
            }
            bodyLock.remove()

            console.log(`${this.moduleName} closed`);
        }else console.log(`${this.options.messanges.noCondition}`)
    }
    toggle(){
        if (this.status) this.close()
        else this.open()
    }
    init(){
        if (this.options.condition(this.icon, this.nav)){
            this.inited = true
            this.icon.addEventListener('click', ()=>{
                if (actionDelay(this.icon)) this.toggle()
            })
            window.addEventListener("orientationchange", ()=>{
                if (this.status) this.close()
            })
        }else console.log(`${this.options.messanges.noCondition}`)
    }
}
