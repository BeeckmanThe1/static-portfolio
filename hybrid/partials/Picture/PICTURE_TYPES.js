import TYPES from '../../CONSTANTS/TYPES';
import CONSTANTS from "../../CONSTANTS/CONSTANTS";

const floatCssClasses = ['float'];
const floatLeftCssClasses = [...floatCssClasses, 'float-left'];
const floatRightCssClasses = [...floatCssClasses, 'float-right'];

const croppedPictureCssClasses = ['cropped-picture'];
const centerCropped = [...croppedPictureCssClasses, 'cropped-picture-center'];

const FLOAT = {
	[CONSTANTS.CSS_CLASSES_KEY]: floatCssClasses,
	FLOAT_LEFT: {
		[CONSTANTS.CSS_CLASSES_KEY]: floatLeftCssClasses,
		CIRCLE: {
			[CONSTANTS.CSS_CLASSES_KEY]: [...floatLeftCssClasses, ...TYPES.SHAPED.CIRCLE[CONSTANTS.CSS_CLASSES_KEY]],
		},
	},
	FLOAT_RIGHT: {
		[CONSTANTS.CSS_CLASSES_KEY]: floatRightCssClasses,
		CIRCLE: {
			[CONSTANTS.CSS_CLASSES_KEY]: [...floatRightCssClasses, ...TYPES.SHAPED.CIRCLE[CONSTANTS.CSS_CLASSES_KEY]],
		}
	}
};

const CROPPING = {
	[CONSTANTS.CSS_CLASSES_KEY]: croppedPictureCssClasses,  //Does NOT work on IE
	CENTER: {
		[CONSTANTS.CSS_CLASSES_KEY]: centerCropped,
		CENTER_CUT_HORIZONTALLY: {
			[CONSTANTS.CSS_CLASSES_KEY]: [...centerCropped, 'cropped-picture-center-cut-horizontally'],
		},
		CENTER_CUT_VERTICALLY: {
			[CONSTANTS.CSS_CLASSES_KEY]: [...centerCropped, 'cropped-picture-center-cut-vertically'],
		},
	},
	TOP: {
		[CONSTANTS.CSS_CLASSES_KEY]: [...croppedPictureCssClasses, 'cropped-picture-top']
	},
	BOTTOM: {
		[CONSTANTS.CSS_CLASSES_KEY]: [...croppedPictureCssClasses, 'cropped-picture-bottom']
	},
	LEFT: {
		[CONSTANTS.CSS_CLASSES_KEY]: [...croppedPictureCssClasses, 'cropped-picture-left']
	},
	RIGHT: {
		[CONSTANTS.CSS_CLASSES_KEY]: [...croppedPictureCssClasses, 'cropped-picture-right']
	}
};


export const PICTURE_TYPES = {
	FLOAT,
	CROPPING
};