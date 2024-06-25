using BlazorBootstrap;
using Microsoft.AspNetCore.Components;

namespace TanglewoodCandleCo.Wasm.Client.Pages
{
    public abstract class TWComponentBase : ComponentBase
    {
        protected Offcanvas offcanvas = default!;
        protected Offcanvas offcanvasAdd = default!;
        protected bool showFlyout = false;
        protected int columnToShow = 0;
        protected int currentIdx = -1;
        
        protected List<ToastMessage> messages = new List<ToastMessage>();

        protected ConfirmDialog confirmCancelDialog = default!;
        protected async Task OnHideOffcanvasClick(bool confirm = true)
        {
            if (!confirm)
            {
                await offcanvasAdd.HideAsync();
                return;
            }

            var options = new ConfirmDialogOptions
            {
                Size = DialogSize.Small,
                YesButtonText = "Ok",
                YesButtonColor = ButtonColor.Success,
                NoButtonText = "Cancel",
                NoButtonColor = ButtonColor.Danger
            };

            var confirmation = await confirmCancelDialog.ShowAsync(
                title: "Confirm how to proceed",
                message1: "Are you sure you want to cancel?",
                confirmDialogOptions: options);

            if (confirmation)
            {
                await offcanvasAdd.HideAsync();
            }
        }

        /// <summary>
        /// Message for screen display
        /// </summary>
        /// <param name="message">If message is blank, record failed to save to DB.</param>
        /// <param name="type">The type of record that save was attempted on.</param>
        /// <returns>ToastMessage for popup</returns>
        protected void DisplayMessage(string message, string type)
        {
            ShowMessage(
                message == "" ? ToastType.Danger : ToastType.Success,
                message == "" ? $"{type} record failed to save." : $"{type} was successfully {message}.",
                message != "");
        }
        private void ShowMessage(ToastType toastType, string message, bool autoHide)
            => messages.Add(CreateToastMessage(toastType, message, autoHide));
        private ToastMessage CreateToastMessage(ToastType toastType, string message, bool autoHide)
            => new ToastMessage
            {
                Type = toastType,
                AutoHide = autoHide,
                Title = "Tanglewood Candle Co.",
                HelpText = $"{DateTime.Now.ToShortTimeString()}",
                Message = message,
            };
    }
}
