export enum uiMenuEnum {
	none = 'none',
	main = 'main',
	user = 'user',
	filter = 'filter'
}
type UiState = {
	menu: uiMenuEnum;
	x: number;
	y: number;
	spring: number;
	duration: number;
};

export let ui = $state<UiState>({
	menu: uiMenuEnum.none,
	x: 0,
	y: 0,
	spring: 50,
	duration: 300
});
