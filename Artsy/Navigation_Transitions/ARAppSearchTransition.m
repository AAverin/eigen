#import "ARAppSearchTransition.h"
#import "ARAppSearchViewController.h"


@implementation ARAppSearchTransition

- (void)pushTransitionFrom:(UIViewController *)fromVC
                        to:(ARAppSearchViewController *)toVC
               withContext:(id<UIViewControllerContextTransitioning>)transitionContext;
{
    toVC.view.alpha = 0;

    CGRect bounds = [transitionContext containerView].bounds;
    UIGraphicsBeginImageContext(bounds.size);
    [fromVC.view drawViewHierarchyInRect:bounds afterScreenUpdates:NO];
    UIImage *viewImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();

    if ([toVC isKindOfClass:[ARAppSearchViewController class]]) {
        toVC.backgroundImage = viewImage;
    }

    [transitionContext.containerView addSubview:fromVC.view];
    [transitionContext.containerView addSubview:toVC.view];

    [UIView animateWithDuration:[self transitionDuration:transitionContext]
        delay:0.0
        options:UIViewAnimationOptionCurveEaseOut
        animations:^{
                         toVC.view.alpha = 1;
        }
        completion:^(BOOL finished) {
                        [transitionContext completeTransition:YES];
        }];
}

- (void)popTransitionFrom:(ARAppSearchViewController *)fromVC
                       to:(UIViewController *)toVC
              withContext:(id<UIViewControllerContextTransitioning>)transitionContext;
{
    [transitionContext.containerView addSubview:toVC.view];
    [transitionContext.containerView addSubview:fromVC.view];

    [UIView animateWithDuration:[self transitionDuration:transitionContext]
        delay:0.0
        options:UIViewAnimationOptionCurveEaseOut
        animations:^{
            fromVC.view.alpha = 0;
        }
        completion:^(BOOL finished) {
            if ([fromVC isKindOfClass:[ARAppSearchViewController class]]) {
                fromVC.backgroundImage = nil;
            }
            [transitionContext completeTransition:YES];
        }];
}

@end
