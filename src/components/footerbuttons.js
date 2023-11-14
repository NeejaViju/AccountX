export default function FooterButtons() {
    return (
      <div className="footer-buttons">
        <button className="save-btn">
          <i className="fa fa-floppy-o" aria-hidden="true"></i>
          Save
        </button>
        <button className="preview-btn">
          <i className="fa fa-eye" aria-hidden="true"></i>
          Preview
        </button>
        <button className="share-btn">
          <i className="fa fa-share-alt" aria-hidden="true"></i>
          Share
        </button>
        <button className="cancel-btn">
          <i className="fa fa-times" aria-hidden="true"></i>
          Cancel
        </button>
      </div>
    );
  }