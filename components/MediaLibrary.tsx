import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const MediaLibrary = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await fetch('/api/media');
    const data = await response.json();
    setImages(data);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "Fehler",
        description: "Bitte wählen Sie eine Datei aus.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('/api/media', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      toast({
        title: "Erfolg",
        description: "Bild erfolgreich hochgeladen.",
      });
      fetchImages();
      setSelectedFile(null);
    } else {
      toast({
        title: "Fehler",
        description: "Beim Hochladen ist ein Fehler aufgetreten.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input type="file" onChange={handleFileChange} accept="image/*" />
        <Button onClick={handleUpload}>Hochladen</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger>
              <img src={image.url} alt={image.name} className="w-full h-32 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{image.name}</DialogTitle>
              </DialogHeader>
              <img src={image.url} alt={image.name} className="w-full max-h-[80vh] object-contain" />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default MediaLibrary;