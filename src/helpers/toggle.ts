export class ToggleComponent {
    protected activeComponent = null;
    protected readonly CLASS_ACTIVE = 'is-active';

    constructor(triggerId: string, componentId: string, defaultState = false) {
        const trigger = document.getElementById(triggerId);
        const component = document.getElementById(componentId);

        if (!trigger || !component) {
            console.error('Elements not found:', { trigger, component, triggerId, componentId });
            return;
        }

        this.activeComponent = {
            trigger,
            component,
            state: defaultState,
        };
        this.addEventListener();
    }

    protected addEventListener() {
        if (!this.activeComponent) return;
        const { trigger, component } = this.activeComponent;
        trigger.addEventListener('click', () => this.toggleComponent(component));
    }

    protected toggleComponent(component: HTMLElement) {
        const newState = !this.activeComponent.state;
        if (newState) {
            this.openComponent(component);
        } else {
            this.closeComponent(component);
        }
        this.activeComponent.state = newState;
    }

    protected openComponent(component: HTMLElement) {
        component.classList.add(this.CLASS_ACTIVE);
    }

    protected closeComponent(component: HTMLElement) {
        component.classList.remove(this.CLASS_ACTIVE);
    }

    protected destroy() {
        if (this.activeComponent) {
            const { trigger, component } = this.activeComponent;
            trigger.removeEventListener('click', () => this.toggleComponent(component));
            this.activeComponent = null;
        }
    }
}

export class Dropdown extends ToggleComponent {
    constructor(triggerId: string, modalId: string, defaultState = false) {
        super(triggerId, modalId, defaultState);
    }
}

export class Modal extends ToggleComponent {
    constructor(triggerId: string, modalId: string, defaultState = false) {
        super(triggerId, modalId, defaultState);
    }

    close() {
        if (!this.activeComponent) return;
        this.closeComponent(this.activeComponent.component);
        this.activeComponent.state = false;
    }
}
