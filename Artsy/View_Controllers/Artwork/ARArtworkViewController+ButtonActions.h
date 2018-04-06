#import "ARArtworkViewController.h"
#import "ARHeartButton.h"
#import "ARBidButton.h"

#import "ARArtworkPreviewActionsView.h"
#import "ARArtworkActionsView.h"
#import "ARArtworkPreviewImageView.h"
#import "ARArtworkDetailView.h"

#import "ARFullWidthCalloutLabelView.h"

@interface ARArtworkViewController (ButtonActions) <ARArtworkDetailViewButtonDelegate, ARArtworkPreviewActionsViewDelegate, ARArtworkActionsViewDelegate, ARArtworkPreviewImageViewDelegate, ARArtworkActionsViewButtonDelegate, ARFullWidthCalloutLabelCallback>

@end
