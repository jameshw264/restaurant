import load_tab_1 from "./tab_1";
import load_tab_2 from "./tab_2";
import load_tab_3 from "./tab_3";
import clear_tabs from "./clear";

const load_tab_buttons = () =>{
    document.querySelector('.tab-1').onclick = () => {
        clear_tabs();
        load_tab_1();
        load_tab_buttons();
    }
    document.querySelector('.tab-2').onclick = () =>{
        clear_tabs();
        load_tab_2();
        load_tab_buttons();
    }
    document.querySelector('.tab-3').onclick = () => {
        clear_tabs();
        load_tab_3();
        load_tab_buttons();
    }
}

export default load_tab_buttons;