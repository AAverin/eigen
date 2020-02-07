#import <UIKit/UIKit.h>

/// We want the Artwork View Controller to allow rotation, but
/// in order for this to happen by default *every* other view in the
/// heirarchy has to support this. So in this case we only check the top VC.

@class RACCommand;


@interface ARNavigationController : UINavigationController

@property (readonly, nonatomic, strong) UIButton *backButton;
@property (readonly, nonatomic, strong) UIViewController *rootViewController;
@property (readwrite, nonatomic, assign) BOOL animatesLayoverChanges;

- (void)showBackButton:(BOOL)visible animated:(BOOL)animated;
- (void)showStatusBarBackground:(BOOL)visible animated:(BOOL)animated white:(BOOL)white;

/// A view controller ARMenuAwareController status bar property
- (void)didUpdateStatusBarForTopViewControllerAnimated:(BOOL)animated;

- (IBAction)back:(id)sender;

/// Removes the specified viewController from anywhere in the stack.
- (void)removeViewControllerFromStack:(UIViewController *)viewController;

@end
