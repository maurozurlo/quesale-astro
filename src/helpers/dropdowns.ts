export class Dropdown {
    private activeDropdown = null;

    private readonly CLASS_ACTIVE = 'is-active';

    create(triggerId: string, modalId: string, defaultState = false) {
        const dropdownTrigger = document.getElementById(triggerId);
        const dropdownModal = document.getElementById(modalId);

        if (!dropdownTrigger || !dropdownModal) {
            console.error('Elements not found at:', {dropdownTrigger, dropdownModal, triggerId, modalId});
            return;
        }

        const dropdownId = "dropdown".concat("-", String(Date.now()));
        this.activeDropdown = {
            id: dropdownId,
            trigger: dropdownTrigger,
            modal: dropdownModal,
            state: defaultState,
        };
        this.addEventListener();
    }

    private addEventListener() {
        if (!this.activeDropdown) return;
        const { trigger, modal } = this.activeDropdown;
        trigger.addEventListener("click", () => this.toggleDropdown(modal));
    }

    private toggleDropdown(modal: HTMLElement) {
        const newState = !this.activeDropdown.state;
        if (newState) {
            this.openDropdown(modal);
        } else {
            this.closeDropdown(modal);
        }
        this.activeDropdown.state = newState;
    }

    private openDropdown(modal: HTMLElement) {
        modal.classList.add(this.CLASS_ACTIVE);
    }

    private closeDropdown(modal: HTMLElement) {
        modal.classList.remove(this.CLASS_ACTIVE);
    }

    destroy() {
        if (this.activeDropdown) {
            const { trigger, modal } = this.activeDropdown;
            trigger.removeEventListener("click", () => this.toggleDropdown(modal));
            this.activeDropdown = null;
        }
    }
}
