export enum uiMenuEnum {
	closed = 'closed',
	main = 'main',
	user = 'user',
	filter = 'filter'
}
type UiState = {
	menu: uiMenuEnum;
};


export let ui = $state<UiState>({
	menu: uiMenuEnum.closed
});

