package br.ifsp.edu.prss6.alucar.resource;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.ifsp.edu.prss6.alucar.domain.model.Imagem;
import br.ifsp.edu.prss6.alucar.domain.model.Veiculo;
import br.ifsp.edu.prss6.alucar.repository.ImagemRepository;
import br.ifsp.edu.prss6.alucar.repository.VeiculoRepository;

@RestController
@RequestMapping("/image")
public class ImagemResource {

	@Autowired
	ImagemRepository imageRepository;
	
	@Autowired
	VeiculoRepository veiculoRepository;

	@PostMapping("/upload/{id}")
	public BodyBuilder uplaodImage(@PathVariable Long id, @RequestParam("imageFile") MultipartFile file) throws IOException {
		Optional<Veiculo> veiculo = veiculoRepository.findById(id);
		System.out.println("Original Image Byte Size - " + file.getBytes().length);
		Imagem img = new Imagem(file.getOriginalFilename(), file.getContentType(),
				compressBytes(file.getBytes()));
		img.setVeiculo(veiculo.get());
		imageRepository.save(img);
		return ResponseEntity.status(HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public Imagem getImage(@PathVariable Long id) throws IOException {
		Optional<Veiculo> veiculo = veiculoRepository.findById(id);
		final Optional<Imagem> retrievedImage = imageRepository.findByVeiculo(veiculo.get());
		Imagem img = new Imagem(retrievedImage.get().getName(), retrievedImage.get().getType(),
				decompressBytes(retrievedImage.get().getPicByte()));
		return img;
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		Optional<Veiculo> veiculo = veiculoRepository.findById(id);
		final Optional<Imagem> retrievedImage = imageRepository.findByVeiculo(veiculo.get());
		imageRepository.deleteById(retrievedImage.get().getId());
	}

	public static byte[] compressBytes(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		try {
			outputStream.close();
		} catch (IOException e) {
		}
		System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);

		return outputStream.toByteArray();
	}

	public static byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
	}
}