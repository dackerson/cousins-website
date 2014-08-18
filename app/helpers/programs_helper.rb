module ProgramsHelper
  def publish_button_text program
    if program.published
      'Published'
    else
      'Not Published'
    end
  end
end
