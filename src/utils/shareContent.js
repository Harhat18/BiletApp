import {Share} from 'react-native';

export const shareContent = (title, message) => {
  Share.share({
    title: title,
    message: message,
  })
    .then(result => {
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared via ${result.activityType}`);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Sharing dismissed');
      }
    })
    .catch(err => {
      console.error('Error sharing:', err);
    });
};
