/*
 * action
 */

export const type = {
    SWITCH_MENU : 'SWITCH_MENU'
}

// switch menu
export function switchMenu(menuName) {
    return {
        type:type.SWITCH_MENU,
        menuName
    }
}